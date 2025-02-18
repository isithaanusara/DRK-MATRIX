const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "t5YmSboI#NjlaxQysKPGiRv3c2kC-ayL5IXuCvfyhe2Bzc6FJjCc",
};
