/*
 * ngelarang lu biar g diubah kyknya emg susah ya anjg
 * jadi kalau lu g bsa ngehargain orang
 * setidaknya buat sc ori by gw, trs buat sc lu hasil copas tuh
 * better bgtu dripada nma gw dihapus smua
 * najis 👎🗿
*/

let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Hai ${ye} Lu Nyari Script Gw YAA, Taruh Nama Gw Pliss Kenichii Di Sc Recode Lu Anjg :) 

Nih Link Scriptnya Nya Dibawah :
https://github.com/Kenichi-BOTZ/KeniBotz-MD

_*Jangan Lupa Tarok Nama Kenichi Distu Ya Anj, Jangan Gratisan Kasian Gw :)*_`
conn.sendBut(m.chat, esce, wm3, 'Thanks', 'thanks', m) 
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler
