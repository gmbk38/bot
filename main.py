# from this import d
# from typing import Dict
from dataclasses import dataclass
import bottle_websocket
import telebot
import pymysql
from telebot import types # URL-кнопка

try:
    # Вводим данные для авторизации бота в нашей базе
    conn = pymysql.connect(
    host="localhost",
    port=3306,
    user="bot",
    password="12345",
    database="test",
    cursorclass=pymysql.cursors.DictCursor # Результат запроса в виде словарей
    )
    print("OK")

    with conn.cursor() as req:
        query = "SELECT q AS question, a 'answer' FROM final_test;"
        req.execute(query)
        rows = req.fetchall()
        # print(rows) # Вывод всех данных БД в консоль при успешном подключении
        # conn.commit() # Коммит для сохранения данных в случае редактирования БД
        conn.close()
except Exception as ex:

    print("BAD REQUEST")
    print(ex)

BOT_TOKEN = '5227789686:AAEAFMeHdqM7RnAC0FBujIrWuWGptuc-L2A'
bot = telebot.TeleBot(BOT_TOKEN)

button_teg = 'Скидка_Бюджет_Оплата обучения_Льготы' # Добавлять теги через '_'

teg_keyboard = types.ReplyKeyboardMarkup(resize_keyboard=True, one_time_keyboard=True)
teg_control = []

status_keyboard = types.ReplyKeyboardMarkup(resize_keyboard=True)
status_keyboard.add('Изменить категорию')
status_keyboard.add('Вопросы по категории')

for i in button_teg.split('_'):
    teg_control.append(i)
    teg_keyboard.add(i)

pinned = None
status_change = 0
status = None

# Приветствие
@bot.message_handler(commands=['start'])
def hello_msg(message):
    global pinned

    bot.send_message(message.chat.id, "Привет, " + message.from_user.first_name + ", чем могу помочь?" + '\n')
    bot.send_message(message.chat.id, "Категория: Не выбрана")
    bot.send_message(message.chat.id, "Используй меню для изменения категории", reply_markup=status_keyboard)
    bot.pin_chat_message(message.chat.id,message.id+2)
    pinned = message.id+2

# @bot.message_handler(commands=['tegs'])
# def teg_msg(message):
#     bot.send_message(message.chat.id, "Часто задаваемые вопросы", reply_markup=teg_keyboard)

# Ответ на вопрос
@bot.message_handler(content_types=['text'])
def answer_finder(message):

    global status_change
    global status

    if message.text == 'Изменить категорию':
        status_change = 1
        bot.send_message(message.chat.id, "Режим изменения категории", reply_markup=teg_keyboard)

    elif message.text in teg_control and status_change == 1:
        status_change = 0
        #print(pinned)
        status = message.text
        bot.edit_message_text(chat_id=message.chat.id, message_id=pinned, text='Категория: ' + message.text)
        bot.send_message(message.chat.id, "Категория изменена", reply_markup=status_keyboard)

    elif message.text == 'Вопросы по категории':
        if status == None:
             bot.send_message(message.chat.id, "Категория не выбрана")
             for dict in rows:
                 bot.send_message(message.chat.id, dict['question'])
        else:
            for dict in rows:
                # print(status)
                if status[:5].lower() in dict['question'].lower() or status[:5].lower() in dict['answer'].lower():
                    bot.send_message(message.chat.id, dict['question'])

    elif message.text in teg_control:
        for dict in rows:
            # dict = {v:k for k, v in dict.items()} # Смена ключа/значения
            if message.text[:5].lower() in dict['question'].lower() or message.text[:5].lower() in dict['answer'].lower(): #!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Добавить если есть в кнопках
                # Проверяем совпадение сообщения с вопросами в БД (Вывод всей информации по слову)
                bot.send_message(message.chat.id, dict['answer'])

    else:
        for dict in rows:
            if message.text.lower() in dict['question'].lower():
                # Проверяем совпадение сообщения с вопросами в БД
                bot.send_message(message.chat.id, dict['answer'])
                break
        else:
            # Ссылаемся на источник
            keyboard = types.InlineKeyboardMarkup()
            url_button = types.InlineKeyboardButton(text="Найти в Яндексе", url="https://yandex.ru/")
            keyboard.add(url_button)
            bot.send_message(message.chat.id, "Затрудняюсь помочь тебе в этом вопросе...", reply_markup=keyboard)

bot.infinity_polling()