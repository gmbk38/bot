from datetime import datetime
import time

start_time = datetime.now()

x = str(input()) #Само слово, если не подходит, то надо поменять под ваш вариант
a = {'Й':'Q','Ц':'W','У':'E','К':'R','Е':'T',
    'Н':'Y','Г':'U','Ш':'I','Щ':'O','З':'P',
    'Х':'{','Ъ':'}','Ф':'A','Ы':'S','В':'D',
    'А':'F','П':'G','Р':'H','О':'J','Л':'K',
    'Д':'L','Ж':':','Э':'"','Я':'Z','Ч':'X',
    'С':'C','М':'V','И':'B','Т':'N','Ь':'M',
    'Б':'<','Ю':'>','Ё':'~','й':'q','ц':'w',
    'у':'e','к':'r','е':'t','н':'y','г':'u',
    'ш':'i','щ':'o','з':'p','х':'[','ъ':']',
    'ф':'a','ы':'s','в':'d','а':'f','п':'g',
    'р':'h','о':'j','л':'k','д':'l','ж':';',
    'э':"'",'я':'z','ч':'x','с':'c','м':'v',
    'и':'b','т':'n','ь':'m','б':',','ю':'.',
    'ё':'`', ' ': ' '} #Список со всеми значениями
res = '' #Создание пустой строки

b = {}

a = {v:k for k, v in a.items()}

j = 0 #Используется для выбора определённой буквы из x
while j < len(x): #Пока j < длинны строки x выполняется цикл
    if x[j] in a: #Если в списке a есть буква из x под номером j, выполняется перевод в английскую раскладку
        i = a[x[j]]
        res += i
        j+=1
    else: #Иначе добавляет пробел
        res+= ' '
print(res) #Выводит результат в консоль(если не подходит, то меняйте под свой случай)

print(datetime.now() - start_time)