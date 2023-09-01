"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.welcome = exports.register = void 0;
const keyboard_1 = require("./keyboard");
async function register(conversation, ctx) {
    var _a;
    await ctx.reply("ENTER YOUR NAME", {
        reply_markup: keyboard_1.cancel_keyboard
    });
    const awaited_name = await conversation.waitFor(":text");
    const name = (_a = awaited_name.msg) === null || _a === void 0 ? void 0 : _a.text;
    if (name) {
        conversation.log(name);
        ctx.session.name = name;
    }
    await ctx.reply('ENTER YOUR USERNAME');
    const awaited_username = await conversation.wait();
    const username = awaited_name === null || awaited_name === void 0 ? void 0 : awaited_name.msg.text;
    if (username) {
        conversation.log(username);
        ctx.session.userName = username;
    }
    await ctx.reply('Thanks for partnering with us.\n\n❇️ You are welcome');
    await ctx.conversation.exit();
    return;
}
exports.register = register;
async function welcome(conversation, ctx) {
    var _a;
    const firstName = ((_a = ctx.from) === null || _a === void 0 ? void 0 : _a.first_name) || 'User';
    await ctx.reply(`Hello 👋 ${firstName}\nWelcome to VENTURE CAPITAL BOT\n\nThis is a cryptocurrency trading bot intended to ensure that all investors are financially led. The bot gives instant payment. Our goal is to provide our investors with a reliable source of income through our trading services.`, {
        reply_markup: keyboard_1.intro_keyboard,
    });
    await ctx.conversation.exit();
    return;
}
exports.welcome = welcome;
