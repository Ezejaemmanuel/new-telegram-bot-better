import { InlineKeyboard, Keyboard } from "grammy";

const intro_keyboard = new Keyboard()
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

// Define the registration keyboard layout
const cancel_keyboard = new Keyboard()
    .text("❌ Cancel") // Added emoji to the Cancel button
    .resized();

// Define the investment keyboard layout
const investment_keyboard = new Keyboard()
    .text("Plan 1️⃣").text("Plan 2️⃣").row()
    .text("Plan 3️⃣").text("Plan 4️⃣").row()
    .text("Plan 5️⃣").text("Promo Plan 🅿️").row()
    .text("Double Plan").row()
    .text("Back ⬅️").text("Main Menu 🏠").row()
    .resized();

// Define the deposit keyboard layout
const deposit_keyboard = new Keyboard()
    .text("BITCOIN").row()
    .text("SMARTCHAIN").text("LITECOIN").row()
    .text("TRON").row()
    .text("USDT").text("ETHEREUM").row()
    .text("Back ⬅️").text("Main Menu 🏠").row()
    .resized();

// Define the submit keyboard layout
const submit_keyboard = new Keyboard()
    .text("SUBMIT").row()
    .text("Cancel").row()
    .resized();

// Define the cancel keyboard layout
// const cancel_keyboard = new Keyboard()
//     .text("Cancel").row()
//     .resized();

// Define the confirm keyboard layout
const confirm_keyboard = new InlineKeyboard()
    .text("✅ CONFIRM", "confirm").row()
    .text("❌ NOT MINE", "not_mine");
const confirm_payment_keyboard = new InlineKeyboard()
    .text("✅ CONFIRM DETAILS", "confirm payment").row()
    .text("❌ WRONG DETAILS", "not correct");

export { confirm_keyboard, confirm_payment_keyboard, cancel_keyboard, submit_keyboard, deposit_keyboard, investment_keyboard, intro_keyboard }