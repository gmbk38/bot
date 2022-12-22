import difflib
import newQ

def similarity(text, info):
    que = 0
    que_similarity = 0
    for dict in info:
        matcher = difflib.SequenceMatcher(None, text.lower(), dict["question"].lower())
        if (round(matcher.ratio(), 2) > que_similarity):
            que_similarity = round(matcher.ratio(), 2)
            que = dict["question"].lower()
            ans = dict["answer"].lower()

    # point = dict["question"].lower()
    # print(f"{round(matcher.ratio(), 5)} ------ {point}")
    # print("------------------------------------------------------------")

#   print(f"|||{que}||| имеет {int(que_similarity*100)}% совпадение с вопросом")
#   return matcher.ratio()
    # return ans
    if que_similarity <= 0.3:
        newQ.newq_record(text)
        return 'Я не могу ответить на твой вопрос. Я сохраню его и передам коллегам'
    else:    
        return ans