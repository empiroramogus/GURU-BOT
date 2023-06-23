let handler = async (m, { conn, text, usedPrefix, command, args }) => {
    if (!global.db.data.chats[m.chat].nsfw) throw `🚫 group doesnt supprt nsfw \n\n enable it by \n*${usedPrefix}enable* nsfw`
    let user = global.db.data.users[m.sender].age
    if (user < 17) throw m.reply(`❎ uneed to be atleast 18 years`)
    if (!text) throw `*This command provides sauce from nhentai: ${usedPrefix + command} miku*`
    try {
    m.reply(global.wait)
    let res = await fetch(``)    
    let json = await res.json()
    let aa = json.result[0].id
    let aa2 = json.result[0].title_native
    let res2 = await fetch(``)
    let json2 = await res2.json()
    let aa3 = json2.result
    await conn.sendMessage(m.chat, { document: { url: aa3 }, mimetype: 'application/pdf', fileName: `${aa2}.pdf` }, { quoted: m })
    } catch {
    throw ``
    }}
    handler.command = /^(poppsggsdf)$/i
    export default handler
