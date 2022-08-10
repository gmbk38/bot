import pandas

excel_data_df = pandas.read_excel('new data 3.xlsx', sheet_name='БД Соц жизнь')

# print(excel_data_df)

# for row in excel_data_df:
#     print(f'---{row}---')

# print(excel_data_df.to_dict(orient='record'))

dict_array = excel_data_df.to_dict(orient='record')

dump_input = ""

for dict in dict_array:
    stroka = "("
    for key in dict:
        stroka += "'" + str(dict[key]) + "'" + ','
    stroka = stroka[:-1]
    stroka += "),"
    dump_input += stroka

print(dump_input[:-1])