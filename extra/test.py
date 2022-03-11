from aiogram import Bot, types
from aiogram.dispatcher import Dispatcher
from aiogram.utils import executor
from aiogram.types import InlineKeyboardMarkup, InlineKeyboardButton


bot = Bot(token="5227789686:AAEAFMeHdqM7RnAC0FBujIrWuWGptuc-L2A")
dp = Dispatcher(bot)
       

keyboard = InlineKeyboardMarkup()
menu_1 = InlineKeyboardButton(text='Расписание 🗓', callback_data="menu_1")
menu_2 = InlineKeyboardButton(text='Программы 💾', callback_data="menu_2")
menu_3 = InlineKeyboardButton(text='О проекте  📌', callback_data="menu_3")
keyboard.add(menu_1, menu_2, menu_3)


@dp.message_handler(commands=['start'])
async def process_start_command(message: types.Message):
    await message.reply("Привет!\nНапиши мне что-нибудь!", reply_markup=keyboard)


@dp.callback_query_handler(text_contains='menu_')
async def menu(call: types.CallbackQuery):
    if call.data and call.data.startswith("menu_"):
        code = call.data[-1:]
        if code.isdigit():
            code = int(code)
        if code == 1:
            await call.message.edit_text('Нажата кнопка Расписание', reply_markup=keyboard)
        if code == 2:
            await call.message.edit_text('Нажата кнопка Программы', reply_markup=keyboard)
        if code == 3:
            await call.message.edit_text('Нажата кнопка О проекте', reply_markup=keyboard)
        else:
            await bot.answer_callback_query(call.id)


if __name__ == '__main__':
    executor.start_polling(dp)