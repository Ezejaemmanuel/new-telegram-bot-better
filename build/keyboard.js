"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intro_keyboard = exports.investment_keyboard = exports.deposit_keyboard = exports.submit_keyboard = exports.cancel_keyboard = exports.confirm_payment_keyboard = exports.confirm_keyboard = void 0;
const grammy_1 = require("grammy");
const intro_keyboard = new grammy_1.Keyboard()
    .text("📝 REGISTRATION 📝").row()
    .text("🖥️ DASHBOARD 🖨️").row()
    .text("📊 INVESTMENT 📊").text("💰 MAKE A DEPOSIT 🏧 💰").row()
    .text("👥 ABOUT 📣 👥").row()
    .text("🔗 REFERRAL LINK 🔗").text("💸 WITHDRAW 💸").row()
    .text("👩‍💻 CONTACT SUPPORT 👩‍💻").row()
    .text("📜 CERTIFICATE 📜").text("❓ FAQs ❓").row()
    .text("💬 CHAT WITH ADMIN 💬")
    .placeholder("choose .....")
    .resized();
exports.intro_keyboard = intro_keyboard;
// Define the registration keyboard layout
const cancel_keyboard = new grammy_1.Keyboard()
    .text("❌ Cancel") // Added emoji to the Cancel button
    .resized();
exports.cancel_keyboard = cancel_keyboard;
// Define the investment keyboard layout
const investment_keyboard = new grammy_1.Keyboard()
    .text("Plan 1️⃣").text("Plan 2️⃣").row()
    .text("Plan 3️⃣").text("Plan 4️⃣").row()
    .text("Plan 5️⃣").text("Promo Plan 🅿️").row()
    .text("Double Plan").row()
    .text("Back ⬅️").text("Main Menu 🏠").row()
    .resized();
exports.investment_keyboard = investment_keyboard;
// Define the deposit keyboard layout
const deposit_keyboard = new grammy_1.Keyboard()
    .text("BITCOIN").row()
    .text("SMARTCHAIN").text("LITECOIN").row()
    .text("TRON").row()
    .text("USDT").text("ETHEREUM").row()
    .text("Back ⬅️").text("Main Menu 🏠").row()
    .resized();
exports.deposit_keyboard = deposit_keyboard;
// Define the submit keyboard layout
const submit_keyboard = new grammy_1.Keyboard()
    .text("SUBMIT").row()
    .text("Cancel").row()
    .resized();
exports.submit_keyboard = submit_keyboard;
// Define the cancel keyboard layout
// const cancel_keyboard = new Keyboard()
//     .text("Cancel").row()
//     .resized();
// Define the confirm keyboard layout
const confirm_keyboard = new grammy_1.InlineKeyboard()
    .text("✅ CONFIRM", "confirm").row()
    .text("❌ NOT MINE", "not_mine");
exports.confirm_keyboard = confirm_keyboard;
const confirm_payment_keyboard = new grammy_1.InlineKeyboard()
    .text("✅ CONFIRM DETAILS", "confirm payment").row()
    .text("❌ WRONG DETAILS", "not correct");
exports.confirm_payment_keyboard = confirm_payment_keyboard;
