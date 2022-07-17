import telebot
import mariadb
from telebot import types # URL-кнопка
from logs import User_log as ul # Класс пользователя
from search import similarity as sim # Функция поиска


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
        # Запрос к БД
        query = "SELECT id, tag, q AS question, a 'answer' FROM final_test;"
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

# Массив словарей для MariaDB
mdb_row = []
for element in rows:
    mdb_row.append({"id": element[0], "tag": element[1], "question": element[2], "answer": element[3]})

# print("------------------------------------------------")
# print (mdb_row)

rows = mdb_row

BOT_TOKEN = '5227789686:AAEAFMeHdqM7RnAC0FBujIrWuWGptuc-L2A'
bot = telebot.TeleBot(BOT_TOKEN)

categories = ["Не выбрана"]
tags = ["Не выбран"]

# Заполняем массив категорий
for dict in rows:
    if (dict["id"] not in categories):
        categories.append(dict["id"])

# Заполняем массив тегов
for dict in rows:
    if (dict["tag"] not in tags):
        tags.append(dict["tag"])

categories_keyboard = types.ReplyKeyboardMarkup(resize_keyboard=True, one_time_keyboard=True) # Меню категорий
tags_keyboard = types.ReplyKeyboardMarkup(resize_keyboard=True, one_time_keyboard=True) # Меню тегов

status_keyboard = types.ReplyKeyboardMarkup(resize_keyboard=True) # Меню статуса
status_keyboard.add('Изменить тег')
status_keyboard.add('Изменить категорию')
status_keyboard.add('Вопросы по категории и тегу')

for i in categories:
    #заполняем меню тегов
    categories_keyboard.add(i)

for i in tags:
    #заполняем меню тегов
    tags_keyboard.add(i)

pinned = None #закреплённое сообщение
category_change = 0 # Флаг смены категории
tag_change = 0 # Флаг смены тега
category = "Не выбрана"
tag = "Не выбран"
user = ul() #объявляем пользователя

# Приветствие
@bot.message_handler(commands=['start'])
def hello_msg(message):

    global pinned
    bot.send_message(message.chat.id, "Привет, " + message.from_user.first_name + ", чем могу помочь?" + '\n')
    bot.send_message(message.chat.id, f"Категория: {category} | Тег: {tag}")
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

    global category_change
    global tag_change
    global category
    global tag

    user.chat_record(message.text)

    if message.text == 'Изменить тег':
        if category == "Не выбрана":
            bot.send_message(message.chat.id, "Сперва измените категорию", reply_markup=status_keyboard)
        else:
            tag_change = 1
            bot.send_message(message.chat.id, "Режим изменения категории", reply_markup=tags_keyboard)

    elif message.text == 'Изменить категорию':
        category_change = 1
        bot.send_message(message.chat.id, "Режим изменения категории", reply_markup=categories_keyboard)

    elif message.text in categories and category_change == 1:
        category_change = 0
        if category == message.text:
            bot.send_message(message.chat.id, "Вы выбрали ту же категорию", reply_markup=status_keyboard)
        else:    
            try:
                category = message.text
                tag = "Не выбран"
                bot.edit_message_text(chat_id=message.chat.id, message_id=pinned, text=f"Категория: {category} | Тег: {tag}")
                bot.send_message(message.chat.id, "Категория изменена", reply_markup=status_keyboard)
            except Exception as ex:
                user.err_record(ex)
                bot.send_message(message.chat.id, "Вышло обновление бота. Перезапустить - /start")

    elif message.text in tags and tag_change == 1:
        tag_change = 0
        if tag == message.text:
            bot.send_message(message.chat.id, "Вы выбрали тот же тэг", reply_markup=status_keyboard)
        else:    
            try:
                tag = message.text
                bot.edit_message_text(chat_id=message.chat.id, message_id=pinned, text=f"Категория: {category} | Тег: {tag}")
                bot.send_message(message.chat.id, "Тег изменён", reply_markup=status_keyboard)
            except Exception as ex:
                user.err_record(ex)
                bot.send_message(message.chat.id, "Вышло обновление бота. Перезапустить - /start")

    elif message.text == 'Вопросы по категории и тегу':
        if category == "Не выбрана":
             bot.send_message(message.chat.id, "Категория не выбрана")
             for dict in rows:
                 bot.send_message(message.chat.id, dict['question'])
        elif tag == "Не выбран":
            for dict in rows:
                if (dict["id"] == category):
                     bot.send_message(message.chat.id, dict['question'])
                # Здесь по категории
        else:
            for dict in rows:
                if (dict["id"] == category and dict["tag"] == tag):
                     bot.send_message(message.chat.id, dict['question'])
                # Здесь по категории

    # elif message.text in button_tag:
    #     for dict in rows:
    #         # dict = {v:k for k, v in dict.items()} # Смена ключа/значения
    #         if message.text[:5].lower() in dict['question'].lower() or message.text[:5].lower() in dict['answer'].lower(): #!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Добавить если есть в кнопках
    #             # Проверяем совпадение сообщения с вопросами в БД (Вывод всей информации по слову)
    #             bot.send_message(message.chat.id, dict['answer'])

    else:
        # for dict in rows:
        #     if message.text.lower() in dict['question'].lower():
        #         # Проверяем совпадение сообщения с вопросами в БД
        #         bot.send_message(message.chat.id, dict['answer'])
        #         break
        if (category == "Не выбрана" or tag == "Не выбран"):
            # bot.send_message(message.chat.id, sim(message.text, rows))
            bot.send_message(message.chat.id, "Выберите категорию и тег")
        elif (tag == "Не выбран"):
            new_answer_rows = []
            for i in rows:
                if(category == i["id"]):
                    new_answer_rows.append(i)
            bot.send_message(message.chat.id, sim(message.text, rows))
        else:
            new_answer_rows = []
            for i in rows:
                if(category == i["id"] and tag == i["tag"]):
                    new_answer_rows.append(i)
            bot.send_message(message.chat.id, sim(message.text, new_answer_rows))
                    
        # else:
        #     # Ссылаемся на источник
        #     keyboard = types.InlineKeyboardMarkup()
        #     url_button = types.InlineKeyboardButton(text="Найти на сайте Финансового университета", url="http://www.fa.ru/Pages/Home.aspx")
        #     keyboard.add(url_button)
        #     bot.send_message(message.chat.id, "Затрудняюсь помочь тебе в этом вопросе...", reply_markup=keyboard)

bot.infinity_polling()