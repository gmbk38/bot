import xlsxwriter
import xlwings as xw

workbook = xlsxwriter.Workbook('bach.xlsx')
worksheet = workbook.add_worksheet('Бакалавриат')
    
row = 0
col = 0
data = []

file_check = open("bach_history.txt","r",encoding='utf-8')
lines = file_check.readlines()

for line in lines:
    if line != '\n':
        # print(line)
        if line not in data:
            worksheet.write(row, col, line)
            data.append(line)
            row += 1

workbook.close()

# wb = xw.Book('bach.xlsx')
# model = wb.sheets['Бакалавриат']
# xw.Range('A').autofit()

# wb.save()
# wb.close()

workbook = xlsxwriter.Workbook('master.xlsx')
worksheet = workbook.add_worksheet('Магистратура')
    
row = 0
col = 0

file_check = open("master_history.txt","r",encoding='utf-8')
lines = file_check.readlines()

for line in lines:
    if line != '\n':
        # print(line)
        worksheet.write(row, col, line)
        row += 1

workbook.close()