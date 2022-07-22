let handler = async m => m.reply(`
            .✵.𝗗𝗢𝗡𝗔𝗦𝗜.✵.

            https://saweria.co/Reyu
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler