let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let pepe = 'https://telegra.ph/file/2e2eb7d093fec08fd00d4.jpg'
  let baper = await fetch(pepe).then(a => a.buffer())

  let arietube = '6287831305832@s.whatsapp.net'
  let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/057b8dff2f6ba7d4553ae.jpg")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/057b8dff2f6ba7d4553ae.jpg")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
  let prepare = await require('@adiwajshing/baileys').generateWAMessageFromContent(m.key.remoteJid,{listMessage:{
  title: `${await conn.getName(conn.user.jid)}`,
  description: ` *𝗦𝗘𝗪𝗔 𝗕𝗢𝗧? 𝗖𝗛𝗔𝗧 𝗪𝗔 𝗗𝗜𝗕𝗔𝗪𝗔𝗛*

☞𝑜𝑤𝑛𝑒𝑟 ❀wa.me/6287831305832}✵

*Owner ${conn.user.name}*
`,
  buttonText: 'Harga Sesuai Pasaran',
  listType: 2,
  productListInfo: {
  productSections: [{
  title:'Klik untuk order',
  products:[{productId:'7487741964584083'}]}],
  headerImage: { productId: '7487741964584083',
  jpegThumbnail: baper },
  businessOwnerJid: `6287831305832@s.whatsapp.net`
  },
  footerText: '',
  }},{})
  conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa)$/i

module.exports = handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }