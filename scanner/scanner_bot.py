import telebot
# from telebot import types
from scanner_logs import time_log as tl
from scanner_logs import chat_log as scan 

BOT_TOKEN = '5489324255:AAFIb3Tb6m-XXUZeSIqY4FncHQc6-0023IE'
bot = telebot.TeleBot(BOT_TOKEN)

@bot.message_handler(commands=['start'])
def hello_msg(message):
    bot.send_message(message.chat.id, "Привет, " + message.from_user.first_name + ", я буду следить за чатом :)" + '\n')

@bot.message_handler(content_types=['text'])
def get_text_messages(message):
    print(message.text)
    print(message.chat.id)

bot.polling(none_stop=True, interval=0)