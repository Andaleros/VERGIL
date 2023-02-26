const fs = require('fs')
const chalk = require('chalk')


global.botname = "GATTONE" 
global.botLanguage = "default" // 𝗗𝗲𝗳𝗮𝘂𝗹𝘁 || 𝗘𝗻𝗴𝗹𝗶𝘀𝗵 || 𝗛𝗶𝗻𝗱𝗶 || 𝗔𝗿𝗮𝗯𝗶𝗰 \\
global.author = "MrGatto"  
global.packname = "GattoBot"  
global.myweb = "https://t.me/Mr_Gatto" // You can put any link 
global.waterMark = "🌌✴  🎀  𝒩𝒶𝓅❤𝓁𝒾 𝒸☯𝓁𝑒𝓇𝒶  🎀  ✴🌌 Andaleros" // Your own watermark 
global.headerText = "GATTONE by MrGatto" // text for header of menu         
global.DocumentTitle = "ANDALEROS" 


global.ownername = "IL CAZZO DI GATTO"   // Owner name //        
global.ownernumber = ['2156533258'] 
global.socialm = "Telegram: @BeNegative111" // 𝗜𝗻𝘀𝘁𝗮 : || 𝗚𝗶𝘁𝗵𝘂𝗯 : || 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 : \\
global.ytname = "YT: @MrGatto"   // Yt chanel name //
global.continent = "Europa" // your continent name 
global.region = "Italia" // your country name
global.state = "Memmt" // your state name
global.district = "lol" // your district name
global.timezone = "Rome" // search on google if you don't know the timezone of your country //
global.instagramId = "...." // Your insta ID
global.email = "mrgatto111@gmail.com" // put your email here


//------------ 🌟 Premium Users 🌟-------------\\
global.premium = ['916900******','917355******']  // available soon
global.sudo = ['916900******','917355******']  // Co - Owners //

global.prefa = ['-']

//--------Random bot name for Info section--------\\
name16 = "𓄂⍣⃝ 🇦𝚗𝚢𝚊 𓆩×͜×𓆪ꪾ️"
name17 = "*Λ⃝ͷ🇾Λ 𓆩×͜×𓆪ꪾ*"
name18 = "*Λ⃝ͷʏΛ 𓆩×͜×𓆪ꪾ*"

//--------Random footer message-----------\\
footer1 = `𓄂⍣⃝🇦𝚗𝚢𝚊ㅤꪜ⃢𝟤ㅤ𓆩×͜×𓆪ꪾ `
footer2 = `Λ⃝ͷʏΛㅤꪜ⃢𝟤ㅤ𓆩×͜×𓆪ꪾ`

//--------Left message "Nikal msg"--------\\
nikalmsg1 = 'Ye galiye ye choubara, yaha dikhna na dubara 😚🖕🏻' 
nikalmsg2 = 'Patt se headshot 🔫...Abey dil se bura lagta hai bhai 😂.'

//--------Random Tagall msg--------\\
tag1 = '𝘏𝘦𝘺 𝘦𝘷𝘦𝘳𝘺𝘣𝘰𝘥𝘺😚, 𝘊𝘰𝘮𝘦 𝘰𝘯𝘭𝘪𝘯𝘦 𝘢𝘯𝘥 𝘶𝘴𝘦 𝘵𝘩𝘪𝘴 𝘢𝘸𝘦𝘴𝘰𝘮𝘦 𝘉𝘰𝘵.' 
tag2 = '𝘖𝘺𝘦 𝘦𝘷𝘦𝘳𝘺𝘰𝘯𝘦!! 𝘞𝘩𝘦𝘳𝘦 𝘢𝘳𝘦 𝘺𝘰𝘶 𝘢𝘭𝘭?😐' 
tag3 = 'Scusate ma siete pregati di rispondere'
tag4 = '𝘞𝘰𝘸 𝘭𝘰𝘰𝘬 𝘢𝘵 𝘵𝘩𝘪𝘴 𝘢𝘥𝘷𝘢𝘯𝘤𝘦 𝘉𝘰𝘵.😚' 
tag5 = 'Ao volete risponne naggia a satana'
tag6 = '𝘐𝘵𝘯𝘢 𝘮𝘻𝘢 𝘬𝘺𝘶 𝘢𝘢 𝘳𝘩𝘢 𝘩𝘢𝘪...𝘛𝘶𝘯𝘦 𝘩𝘢𝘸𝘢 𝘮𝘦 𝘣𝘩𝘢𝘯𝘨 𝘮𝘪𝘭𝘢𝘺𝘢 𝘩𝘢𝘪!🥵' 
tag7 = 'Vi tiro un cazzo di ceffone se non rispondete puttana Eva ladra'
tag8 = '𝘏𝘦𝘺 𝘸𝘩𝘦𝘳𝘦 𝘺𝘰𝘶 𝘢𝘭𝘭?...𝘤𝘰𝘮𝘦 𝘩𝘦𝘳𝘦 𝘨𝘶𝘺𝘴 𝘶𝘴𝘦 𝘵𝘩𝘪𝘴 𝘖𝘗 𝘉𝘰𝘵!🔥' 
tag9 = '𝘠𝘰𝘶 𝘢𝘭𝘭 𝘴𝘩𝘰𝘶𝘭 𝘵𝘳𝘺 𝘵𝘩𝘪𝘴 𝘤𝘶𝘵𝘦 𝘈𝘯𝘺𝘢❤️🍫' 
tag10 = '𝘈𝘺𝘰𝘰 𝘈𝘯𝘺𝘢 𝘪𝘴 𝘉𝘦𝘴𝘵!!😚' 


global.mess = {
    success: 'Fatto Fratm',
    admin: "FRATM!\nThis command è solo per gli 𝗔𝗱𝗺𝗶𝗻𝘀... quindi non puoi usarlo . 😑", // I used "\n" for change the line 
    botAdmin: 'Fammi 𝗔𝗱𝗺𝗶𝗻!!! 😐',
    owner: 'Questo comando è solo di MrGatto 𝗼𝘄𝗻𝗲𝗿..',
    group: "BROOOO !!!!!\non puoi usare sto comando in chat privata !😑",
    private: 'AYOOO !!\nquesto comando è solo per chat private. 🥲',
    bot: "È solo per i bot coglione.",
    wait: "Ho quasi fatto bro, solo un attimo......",
    linkm: 'ndo sta il link...?',
    error: 'Ci sta un ERRORE!!',
    sudo: "*FRA IL COMANDO È SOLO PER IL co-owner.", 
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    ban: 'MALEDETTO sei stato bannato da me ovvero MrGatto😡, se vuoi essere sbannato contattami.',
    nsfw: 'AO GUARDA ER PERVERTITO👏, no dai scherzo la funzione non è attiva',
    banChat: 'Il bot è bannato da questo gruppo!, contatta il proprietario su telegram per fartelo sbannare.'
}

//--------------- Menu images ----------------\\
global.Menuimage = fs.readFileSync("./AnyaPikaMedia/theme/Menu/Menuimg.jpg")
global.thumnnaiIs = fs.readFileSync("./AnyaPikaMedia/theme/Menu/Menuimg2.jpeg")

//--------------- Systemic Function --------------\\
global.autoTyping = false 
global.autoreadpmngc = false 
global.autoReadGc = false 
global.autoRecord = false 
global.available = true
global.autoTyping = false 

//----------- Users Userlimit -----------\\
global.userLimit = {
premium: "Infinity",  // premium users 
free: 12,            // Free users
}


/*𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹 DANGER ZONE ⚠️👇 𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹*/
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
