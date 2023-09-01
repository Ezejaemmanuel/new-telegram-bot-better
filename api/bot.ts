import dotenv from 'dotenv';
dotenv.config();
//import { register } from './register';
import { cancel_keyboard, intro_keyboard } from './keyboard';

//import { register, welcome } from './register';
//import { Bot, MyContext, SessionData, autoRetry, conversations, createConversation, freeStorage, session } from './types';
import { Bot, BotError, Context, GrammyError, HttpError, SessionFlavor, session } from 'grammy';
//import { ConversationFlavor, Conversation, conversations, createConversation } from '@grammyjs/conversations';
import {
    type Conversation,
    type ConversationFlavor,
    conversations,
    createConversation,
} from "@grammyjs/conversations";
import { freeStorage } from '@grammyjs/storage-free';
import { register } from './register';


interface SessionData {
    telegramName: string;
    name: string;
    userName: string;
    //here is things about tracking reegistration
    isAboutToRegister: string;
    isRegistered: boolean;
    registrationStep: string;
}
type MyContext = Context & SessionFlavor<SessionData> & ConversationFlavor;
//export type MyConvContext = Context & ConversationFlavor;
type MyConversation = Conversation<MyContext>;


const TOKEN = process.env.INVESTIVAPRO_TOKEN;
console.log(TOKEN);
if (!TOKEN) {
    throw new Error('Telegram API key not found in .env file');
}

const bot = new Bot<MyContext>(TOKEN);
const storage = freeStorage<SessionData>(TOKEN);
// Install the session plugin.
bot.use(session({
    initial: () => ({ telegramName: "", name: "", userName: "", isAboutToRegister: "", isRegistered: false, registrationStep: "" }),
    storage: storage
}));

// Install the conversations plugin.
bot.use(conversations());
bot.use(createConversation(register));
// bot.use(createConversation(welcome));
// bot.api.config.use(autoRetry());



//this is the start command 
bot.command('start', async (ctx) => {
    const firstName = ctx.from?.first_name || 'User';
    await ctx.reply(`Hello 👋 ${firstName}\nWelcome to VENTURE CAPITAL BOT\n\nThis is a cryptocurrency trading bot intended to ensure that all investors are financially led. The bot gives instant payment. Our goal is to provide our investors with a reliable source of income through our trading services.`, {
        reply_markup: intro_keyboard,
    });
    ctx.session.telegramName = firstName;


});
// bot.hears("❌ Cancel", async (ctx) => {
//     await ctx.conversation.enter("welcome")
// });
// bot.hears('📝 REGISTRATION 📝', async (ctx) => {
//     await ctx.reply('FILL IN THE REQUIRED DETAILS CORRECTLY FOR SAFE AND SECURE INVESTMENT', {
//         reply_markup: cancel_keyboard,
//     });
//     await ctx.conversation.enter('registration');
// });


bot.on("message", async (ctx) => [
    ctx.reply("this is the default message you can click /start to start conversations well")
])

bot.catch((err) => {
    const ctx = err.ctx;
    console.error(`Error while handling update ${ctx.update.update_id}:`);
    const e = err.error;
    if (e instanceof GrammyError) {
        console.error("Error in request:", e.description);
    } else if (e instanceof HttpError) {
        console.error("Could not contact Telegram:", e);
    } else {
        console.error("Unknown error:", e);
    }
});

bot.start();




//export default webhookCallback(bot, "http");
