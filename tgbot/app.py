import asyncio

from aiogram import Bot, Dispatcher, Router, types, F

from tgbot import config
from tgbot.keyboards.inline import ikb_donate

bot = Bot(token=config.BOT_TOKEN)
dp = Dispatcher()


async def main():
    await dp.start_polling(bot)



@dp.message(F.text == '/start')
async def cmd_start(message: types.Message):
    await message.reply('Hello!', reply_markup=ikb_donate)



asyncio.run(main())
