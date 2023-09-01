"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//import { register } from './register';
const keyboard_1 = require("./keyboard");
//import { register, welcome } from './register';
//import { Bot, MyContext, SessionData, autoRetry, conversations, createConversation, freeStorage, session } from './types';
const grammy_1 = require("grammy");
//import { ConversationFlavor, Conversation, conversations, createConversation } from '@grammyjs/conversations';
const conversations_1 = require("@grammyjs/conversations");
const storage_free_1 = require("@grammyjs/storage-free");
const register_1 = require("./register");
const TOKEN = process.env.INVESTIVAPRO_TOKEN;
console.log(TOKEN);
if (!TOKEN) {
    throw new Error('Telegram API key not found in .env file');
}
const bot = new grammy_1.Bot(TOKEN);
const storage = (0, storage_free_1.freeStorage)(TOKEN);
// Install the session plugin.
bot.use((0, grammy_1.session)({
    initial: () => ({ telegramName: "", name: "", userName: "", isAboutToRegister: "", isRegistered: false, registrationStep: "" }),
    storage: storage
}));
// Install the conversations plugin.
bot.use((0, conversations_1.conversations)());
bot.use((0, conversations_1.createConversation)(register_1.register));
// bot.use(createConversation(welcome));
// bot.api.config.use(autoRetry());
//this is the start command 
bot.command('start', async (ctx) => {
    var _a;
    const firstName = ((_a = ctx.from) === null || _a === void 0 ? void 0 : _a.first_name) || 'User';
    await ctx.reply(`Hello 👋 ${firstName}\nWelcome to VENTURE CAPITAL BOT\n\nThis is a cryptocurrency trading bot intended to ensure that all investors are financially led. The bot gives instant payment. Our goal is to provide our investors with a reliable source of income through our trading services.`, {
        reply_markup: keyboard_1.intro_keyboard,
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
]);
bot.catch((err) => {
    const ctx = err.ctx;
    console.error(`Error while handling update ${ctx.update.update_id}:`);
    const e = err.error;
    if (e instanceof grammy_1.GrammyError) {
        console.error("Error in request:", e.description);
    }
    else if (e instanceof grammy_1.HttpError) {
        console.error("Could not contact Telegram:", e);
    }
    else {
        console.error("Unknown error:", e);
    }
});
bot.start();
//export default webhookCallback(bot, "http");
