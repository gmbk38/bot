from datetime import datetime

def chat_log(text):
    file_upd = open("/home/start/bot/scanner/chat_history.txt","a+",encoding='utf-8')
    file_upd.write(str(text) + "\n")
    file_upd.write("\n")
    file_upd.close()

def time_log():
    file_upd = open("/home/start/bot/scanner/time_history.txt","a+",encoding='utf-8')
    date = str(datetime.now()).split(".")[0]
    file_upd.write("\n")
    file_upd.close()