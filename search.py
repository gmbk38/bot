import difflib

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
    return ans

info = [
{"question": "Что входит в портфолио (магистратура)", "answer": "1 вопрос"},
{"question": "Что входит в портфолио (магистратура)!", "answer": "2 вопрос"},
{"question": "Что входит в портфолио (бакалавриат)", "answer": "3 вопрос"}
]

text = "что а у ээээ порфолио магистры"

print(similarity(text, info))