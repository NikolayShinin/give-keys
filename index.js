import fetch from 'node-fetch'
import TelegramBot from "node-telegram-bot-api";
import {config} from 'dotenv'

config()

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, {polling: true});
bot.sendMessage(437369676, 'работаю')
async function main() {
    try {
        const res = await fetch('https://72dom.com/give-keys')
        const result = await res.text()
        if (result.indexOf('Запись на выдачу ключей закрыта') === -1) {
            bot.sendMessage(437369676, 'Запись открылась')
            return
        }
        console.log('записи еще нет')
    } catch (e) {

    }
}
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

setInterval(()=> {
    main()
},getRandomArbitrary(60000, 180000))
