const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "D7JDSKoJ#AATmEygoowdid_P-bQ_o_tp6Q2NxhudiOyind1nfl3g",
};
