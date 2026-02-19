const mongoose = require('mongoose');

const ticketConfigSchema = new mongoose.Schema({
    guildId: { type: String, required: true }, 
    ticketName: { type: String, default: 'شكوى' }, 
    categoryId: { type: String, required: true }, 
    logsChannelId: { type: String, required: true }, 
    supportRoleId: { type: String, required: true }, 
    welcomeMessage: { type: String, default: 'مرحباً بك، كيف يمكننا مساعدتك؟' }, 
    questions: { 
        type: [String], 
        default: [
            'اسمك', 
            'الخادم أو السيرفر', 
            'اسم الإداري المقدم ضده الشكوى', 
            'ما هو السبب؟'
        ] 
    } 
});

module.exports = mongoose.model('TicketConfig', ticketConfigSchema);
