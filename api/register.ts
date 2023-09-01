import { Context, SessionFlavor } from "grammy";
import { cancel_keyboard, intro_keyboard } from "./keyboard";
//import { MyContext, MyConversation } from "./types";
import {
    type Conversation,
    type ConversationFlavor,
    conversations,
    createConversation,
} from "@grammyjs/conversations";
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

export async function register(conversation: MyConversation, ctx: MyContext) {
    await ctx.reply("ENTER YOUR NAME", {
        reply_markup: cancel_keyboard
    });
    const awaited_name = await conversation.waitFor(":text");
    const name = awaited_name.msg?.text
    if (name) {
        conversation.log(name);
        ctx.session.name = name;
    }
    await ctx.reply('ENTER YOUR USERNAME');
    const awaited_username = await conversation.wait();
    const username = awaited_name?.msg.text;
    if (username) {
        conversation.log(username);
        ctx.session.userName = username;
    }
    await ctx.reply('Thanks for partnering with us.\n\n❇️ You are welcome');
    await ctx.conversation.exit();
    return;



}
export async function welcome(conversation: MyConversation, ctx: MyContext) {
    const firstName = ctx.from?.first_name || 'User';
    await ctx.reply(`Hello 👋 ${firstName}\nWelcome to VENTURE CAPITAL BOT\n\nThis is a cryptocurrency trading bot intended to ensure that all investors are financially led. The bot gives instant payment. Our goal is to provide our investors with a reliable source of income through our trading services.`, {
        reply_markup: intro_keyboard,
    });
    await ctx.conversation.exit();
    return;
}


