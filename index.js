const _0x4f2a = ['openai', 'apiKey', 'openai_api_key', 'Client', 'LocalAuth', 'whatsapp-web.js', 'qrcode-terminal', 'bot_config.js', 'qr', 'generate', 'small', 'log', 'කරුණාකර\x20ඉහත\x20QR\x20Code\x20එක\x20Scan\x20කරන්න...', 'ready', 'Bot\x20සූදානම්!\x20දැන්\x20පණිවිඩ\x20යැවිය\x20හැක...', 'message', 'startsWith', 'prefix', 'slice', 'length', 'trim', 'chat', 'completions', 'create', 'gpt-3.5-turbo', 'user', 'choices', 'content', 'reply', 'OpenAI\x20Error:', 'error', 'කණගාටුයි,\x20පිළිතුර\x20ලබා\x20ගැනීමේදී\x20දෝෂයක්\x20සිදු\x20විය.', 'initialize'];
const _0x1b3c = function(_0x4f2a1b, _0x1b3c4d) { _0x4f2a1b = _0x4f2a1b - 0x0; let _0x3e2f1a = _0x4f2a[_0x4f2a1b]; return _0x3e2f1a; };

const { Client, LocalAuth } = require(_0x1b3c('0x5'));
const qrcode = require(_0x1b3c('0x6'));
const { OpenAI } = require(_0x1b3c('0x0'));
const config = require('./' + _0x1b3c('0x7'));

const openai = new OpenAI({ [_0x1b3c('0x1')]: config[_0x1b3c('0x2')] });
const client = new Client({ 'authStrategy': new LocalAuth() });

client.on(_0x1b3c('0x8'), (_0xqr) => {
    qrcode[_0x1b3c('0x9')](_0xqr, { [_0x1b3c('0xa')]: !![] });
    console[_0x1b3c('0xb')](_0x1b3c('0xc'));
});

client.on(_0x1b3c('0xd'), () => {
    console[_0x1b3c('0xb')](_0x1b3c('0xe'));
});

client.on(_0x1b3c('0xf'), async (_0xmsg) => {
    if (_0xmsg['body'][_0x1b3c('0x10')](config[_0x1b3c('0x11')])) {
        const _0xprompt = _0xmsg['body'][_0x1b3c('0x12')](config[_0x1b3c('0x11')][_0x1b3c('0x13')])[_0x1b3c('0x14')]();
        try {
            const _0xres = await openai[_0x1b3c('0x15')][_0x1b3c('0x16')][_0x1b3c('0x17')]({
                'model': _0x1b3c('0x18'),
                'messages': [{ 'role': _0x1b3c('0x19'), 'content': _0xprompt }],
                'max_tokens': 0x1f4
            });
            const _0xreplyText = _0xres[_0x1b3c('0x1a')][0][_0x1b3c('0xf') === 'message' ? 'message' : 'choices'][_0x1b3c('0x1b')];
            _0xmsg[_0x1b3c('0x1c')](_0xreplyText);
        } catch (_0xerr) {
            console[_0x1b3c('0x1e')](_0x1b3c('0x1d'), _0xerr);
            _0xmsg[_0x1b3c('0x1c')](_0x1b3c('0x1f'));
        }
    }
});

client[_0x1b3c('0x20')]();
