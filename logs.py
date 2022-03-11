from datetime import datetime


class User_log():
    def __init__(self):
        self.id = None
        self.fname = None
        self.lname = None
        self.nickname = None

    def user_record(self):
        #добавляем лог пользователя
        file_check = open("logs/users/users.txt","r",encoding='utf-8')
        lines = file_check.readlines()
        mark = 0
        for line in lines:
            line = line.replace("\n","")
            if line == str(self.id) + " | " + str(self.fname) + " | " + str(self.lname) + " | " + str(self.nickname):
                mark = 1
                break
        if mark == 0:
            file_upd = open("logs/users/users.txt","a+",encoding='utf-8')
            file_upd.write(str(self.id) + " | " + str(self.fname) + " | " + str(self.lname) + " | " + str(self.nickname) + "\n")
            file_upd.close()


    def chat_record(self,msg):
        #запись сообщений пользователя
        file_upd = open("logs/chats/" + str(self.id) + ".txt","a+",encoding='utf-8')
        date = str(datetime.now()).split(".")[0]
        file_upd.write(date + " " + msg + "\n")
        file_upd.close()

    def err_record(ex):
        file_upd = open("logs/chats/err.txt","a+",encoding='utf-8')
        file_upd.write(str(ex) + "\n")
        file_upd.close()