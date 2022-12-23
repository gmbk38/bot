import pandas as pd

def newq_record(newq):

    data = pd.read_excel('/home/start/bot/newQ/Новые вопросы.xlsx', header= None).rename(columns={0 : 'q'})

    if data.shape[0] == 0:
        data = pd.DataFrame(columns=['q'])

    data.loc[data.shape[0]] = newq
    
    data.to_excel('/home/start/bot/newQ/Новые вопросы.xlsx', columns= None, index= None, header= None, engine='xlsxwriter')