import telebot

# -793838639

BOT_TOKEN = '5276719164:AAEtAt33tVLBf2DWBHTnIPlAFvbf4KVMang'
bot = telebot.TeleBot(BOT_TOKEN)

# Приветствие

@bot.message_handler(commands=['start'])
def hello_msg(message):
    bot.send_message(message.chat.id, "Привет" + '\n')

@bot.message_handler(content_types=['text'])
def get_text_messages(message):
    # print("Получаю")
    print(message.text)
    # print(message.id)
    # print(message.chat.id)
    # for i in range(-100, 150):
    #     try:
    #         message.id = i
    #         print (message.id)
    #         print(message.text)
    #     except Exception as ex:
    #         pass
    # print("Я получил")

bot.polling(none_stop=True, interval=0)