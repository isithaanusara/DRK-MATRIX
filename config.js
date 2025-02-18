const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "LAKA-MD=dkwjAbZK#hC-iquUc6uyBGeE0I63KvFXPVfbpUqy3NsEFNR7bi5s",
};
