const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { OpenAI } = require('openai');
const config = require('./bot_config.js');

// OpenAI Configuration
const openai = new OpenAI({
    apiKey: config.openai_api_key,
});

const client = new Client({
    authStrategy: new LocalAuth()
});

// QR Code එක පෙන්වීම
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log('කරුණාකර ඉහත QR Code එක Scan කරන්න...');
});

client.on('ready', () => {
    console.log('Bot සූදානම්! දැන් පණිවිඩ යැවිය හැක...');
});

// පණිවිඩ ලැබෙන විට ක්‍රියාත්මක වන කොටස
client.on('message', async (msg) => {
    if (msg.body.startsWith(config.prefix)) {
        const prompt = msg.body.slice(config.prefix.length).trim();
        
        try {
            const response = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: prompt }],
                max_tokens: 500,
            });

            const chatGptResponse = response.choices[0].message.content;
            msg.reply(chatGptResponse);
        } catch (error) {
            console.error("OpenAI Error:", error);
            msg.reply("කණගාටුයි, පිළිතුර ලබා ගැනීමේදී දෝෂයක් සිදු විය.");
        }
    }
});

client.initialize();
