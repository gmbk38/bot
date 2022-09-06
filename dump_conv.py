import pandas

excel_data_df = pandas.read_excel('data0609.xlsx', sheet_name='БД 2ВО')
excel_data_2 = pandas.read_excel('data0609.xlsx', sheet_name='БД Соц жизнь')

# print(excel_data_df)

# for row in excel_data_df:
#     print(f'---{row}---')

# print(excel_data_df.to_dict(orient='record'))

dict_array = excel_data_df.to_dict(orient='record')
dict_2 = excel_data_2.to_dict(orient='record')

dump_input = ""

for dict in dict_array:
    stroka = "("
    for key in dict:
        if "syn" not in key:
            stroka += "'" + str(dict[key]) + "'" + ','
    stroka = stroka[:-1]
    stroka += "),"
    dump_input += stroka

for dict in dict_2:
    stroka = "("
    for key in dict:
        if "syn" not in key:
            stroka += "'" + str(dict[key]) + "'" + ','
    stroka = stroka[:-1]
    stroka += "),"
    dump_input += stroka

print(dump_input[:-1])