import telebot
import mariadb
from telebot import types # URL-кнопка
from logs import User_log as ul


try:
    # Вводим данные для авторизации бота в нашей базе
    conn = mariadb.connect(
    host="localhost",
    # port=3306,
    user="root",
    password="Gorizont22",
    database="test",
    # cursorclass=pymysql.cursors.DictCursor # Результат запроса в виде словарей
    )
    print("OK")

    with conn.cursor() as req:
        query = "SELECT q AS question, a 'answer' FROM final_test;"
        req.execute(query)
        # row1= req.fetchone()
        # print (row1)
        # print (*row1, sep=' ')
        # row2 = req.fetchall()
        # print (row2)
        # print (*row2, sep=' ')

        rows = req.fetchall()
        # print(rows) # Вывод всех данных БД в консоль при успешном подключении
        # conn.commit() # Коммит для сохранения данных в случае редактирования БД
        conn.close()
except Exception as ex:
    print("BAD REQUEST")
    print(ex)

mdb_row = []
for element in rows:
    mdb_row.append({element[0]: element[1]})

print("------------------------------------------------")
print (mdb_row)


BOT_TOKEN = '5227789686:AAEAFMeHdqM7RnAC0FBujIrWuWGptuc-L2A'
bot = telebot.TeleBot(BOT_TOKEN)

button_teg = 'Скидка_Бюджет_Оплата обучения_Льготы_Бакалавриат_Киберпанк_Цветы' #добавлять теги через '_'

teg_keyboard = types.ReplyKeyboardMarkup(resize_keyboard=True, one_time_keyboard=True)
teg_control = []

status_keyboard = types.ReplyKeyboardMarkup(resize_keyboard=True) #меню статуса
status_keyboard.add('Изменить категорию')
status_keyboard.add('Вопросы по категории')

for i in button_teg.split('_'):
    #заполняем меню тегов
    teg_control.append(i)
    teg_keyboard.add(i)

pinned = None #закреплённое сообщение
status_change = 0 #флаг смены статуса
status = None
user = ul() #объявляем пользователя

# Приветствие
@bot.message_handler(commands=['start'])
def hello_msg(message):

    global pinned
    bot.send_message(message.chat.id, "Привет, " + message.from_user.first_name + ", чем могу помочь?" + '\n')
    bot.send_message(message.chat.id, "Категория: Не выбрана")
    bot.send_message(message.chat.id, "Используй меню для изменения категории", reply_markup=status_keyboard)
    bot.pin_chat_message(message.chat.id,message.id+2)
    pinned = message.id+2 #закрепляем сообщение со статусом

    user.id = message.chat.id
    user.fname = message.from_user.first_name
    user.lname = message.from_user.last_name
    user.nickname = message.from_user.username
    user.user_record()

# Ответ на вопрос
@bot.message_handler(content_types=['text'])
def answer_finder(message):

    global status_change
    global status

    user.chat_record(message.text)

    if message.text == 'Изменить категорию':
        status_change = 1
        bot.send_message(message.chat.id, "Режим изменения категории", reply_markup=teg_keyboard)

    elif message.text in teg_control and status_change == 1:
        status_change = 0
        if status == message.text:
            bot.send_message(message.chat.id, "Вы выбрали ту же категорию", reply_markup=status_keyboard)
        else:    
            try:
                status = message.text
                bot.edit_message_text(chat_id=message.chat.id, message_id=pinned, text='Категория: ' + message.text)
                bot.send_message(message.chat.id, "Категория изменена", reply_markup=status_keyboard)
            except Exception as ex:
                user.err_record(ex)
                bot.send_message(message.chat.id, "Вышло обновление бота. Перезапустить - /start")

    elif message.text == 'Вопросы по категории':
        if status == None:
             bot.send_message(message.chat.id, "Категория не выбрана")
             for dict in rows:
                 bot.send_message(message.chat.id, dict['question'])
        else:
            for dict in rows:
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
            url_button = types.InlineKeyboardButton(text="Найти на сайте Финансового университета", url="http://www.fa.ru/Pages/Home.aspx")
            keyboard.add(url_button)
            bot.send_message(message.chat.id, "Затрудняюсь помочь тебе в этом вопросе...", reply_markup=keyboard)

bot.infinity_polling()