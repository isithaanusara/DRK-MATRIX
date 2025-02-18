const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "👋",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `╭━━〔 *DARK-MATRIX_MD* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *⏳Uptime*:  ${runtime(process.uptime())} 
┃◈┃• *📟 Ram usage*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
┃◈┃• *⚙️ HostName*: ${os.hostname()}
┃◈┃• *🙈🤘 Owner*: CRYPTO KNIGHT
┃◈┃• *🧬 Version*: V1 BETA
┃◈└───────────┈⊷
╰──────────────┈⊷

  *ᴡorld most Riliable and Trust bot💝.*

  https://whatsapp.com/channel/0029Vb08PUg8kyyEzt49me2r

> © ʀᴇ-ᴄᴏᴅᴇᴅ ʙʏ ᴄʀʏᴘᴛᴏ ᴋɴɪɢʜᴛ`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://i.ibb.co/LdpGTJMJ/182.jpg` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '94761395699@g.us@newsletter',
                    newsletterName: '𝐃𝐚𝐫𝐤-𝐦𝐚𝐭𝐫𝐢𝐱',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command😒:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
