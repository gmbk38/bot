from datetime import datetime

def chat_log(text, element):
    if (element == 1):
        file_upd = open("/home/start/bach_history.txt","a+",encoding='utf-8')
    elif(element == 2):
        file_upd = open("/home/start/master_history.txt","a+",encoding='utf-8')
    else:
        file_upd = open("/home/start/extra_history.txt","a+",encoding='utf-8')
    file_upd.write(str(text) + "\n")
    file_upd.write("\n")
    file_upd.close()

def time_log():
    file_upd = open("/home/start/time_history.txt","a+",encoding='utf-8')
    date = str(datetime.now()).split(".")[0]
    file_upd.write("\n")
    file_upd.close()