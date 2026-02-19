const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

// الاتصال بقاعدة البيانات
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ قاعدة البيانات متصلة بنجاح!'))
    .catch(err => console.error('❌ خطأ في قاعدة البيانات:', err));

app.get('/', (req, res) => res.send('United State Bot is Live!'));

app.listen(process.env.PORT || 3000, () => {
    console.log('🚀 الخادم جاهز والعمل مستمر');
});
