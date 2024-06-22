const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349063631083";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_07_06_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDg1LFxuICAgICAgICA3NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU5LFxuICAgICAgICA3OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDM5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDExLFxuICAgICAgICAxOTUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE2LFxuICAgICAgICA1MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzgsXG4gICAgICAgIDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTk5LFxuICAgICAgICA3MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjksXG4gICAgICAgIDM1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMixcbiAgICAgICAgODEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg4LFxuICAgICAgICA1MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDU3LFxuICAgICAgICAyNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxODUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDMsXG4gICAgICAgIDExLFxuICAgICAgICAyNDYsXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNixcbiAgICAgICAgNDMsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDU2LFxuICAgICAgICAyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTUyLFxuICAgICAgICA4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzksXG4gICAgICAgIDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDg5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTg2LFxuICAgICAgICA3MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTYxLFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTksXG4gICAgICAgIDc2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgODcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDc3LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDM3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTMzLFxuICAgICAgICA2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaERPRDNzWUFFaUloMGZLbDRsWTVUWTFRTTZhejFFTnVxLzR2Nk9nUFA3OD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDYzNjMxMDgzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3QTIyMEJGMjdFMEU3OENBRTE2NDcxMDg0RDE4RTVDQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkwNzI0NjhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUkVwWFJqS3FUU3lVYldpRXhWVHVKUVwiLFxuICBcInBob25lSWRcIjogXCI3NmYwYzFmOC1kMDcwLTRmZmItYmRiYy01ZTI0ZjA2ZTNjNjNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjcsXG4gICAgICAyMzQsXG4gICAgICAyMTQsXG4gICAgICA2OCxcbiAgICAgIDQ3LFxuICAgICAgMjM2LFxuICAgICAgMTY1LFxuICAgICAgNTQsXG4gICAgICAxNSxcbiAgICAgIDgwLFxuICAgICAgMjM1LFxuICAgICAgMjUzLFxuICAgICAgMjM1LFxuICAgICAgMTE3LFxuICAgICAgODAsXG4gICAgICA4NSxcbiAgICAgIDY1LFxuICAgICAgNzMsXG4gICAgICAxNTAsXG4gICAgICAxNzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzEsXG4gICAgICAyMDUsXG4gICAgICAxMDEsXG4gICAgICAyMCxcbiAgICAgIDMyLFxuICAgICAgMTQ1LFxuICAgICAgOTksXG4gICAgICAxNDQsXG4gICAgICAzOCxcbiAgICAgIDgyLFxuICAgICAgNDcsXG4gICAgICAyNDIsXG4gICAgICAxNyxcbiAgICAgIDQyLFxuICAgICAgODQsXG4gICAgICAyNTQsXG4gICAgICAyMDUsXG4gICAgICAxMzAsXG4gICAgICAxMjksXG4gICAgICAxNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTllCQ1NHSFRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNjM2MzEwODM6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc0MzExMzczOTM4NzIzOjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHlBd2o4UXlPM2Jzd1lZQXlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJCeHpoUk9XUnRXYWlRZlgrWTZuVWo2cGNaL3BnNHljK0VaeUttTGRkcVJnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNhYXVnL3BIRms0VEg3cXJ0eklONGVSTG01ZFprYzdTdU9FQm16cjVUZSt4aTllZitUUnA2ZzdhUFRVMTlCNkg4MnFpcnpkSHZ6cUphRUhYWmRzUUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIktuN0lVSU5rcmxEeEJLd2pTOFJ6R0ErRWwzWUtDU0JUYjNCdW1ZZW1JYUJqUkJIWUdnNDhZZHV2SlhFUVpTM2xCWDArUTIrbWRySWZuUTJLbVplL2pBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNjM2MzEwODM6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MDcyNDYwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUE9iXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQT2IuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJFbFU1ejQvT1hqcVNCeGNMemZDMm45enFJeG1yZTUvMUxGY2FjaTBFdW5nPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzMzIwMTk4MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE3MDk2NzIyNjQ3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
