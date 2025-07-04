const fs = require('fs')

// //异步追加
// fs.appendFile('./hhh.txt', ',wyt', err => {
//     if (err) {
//         console.log('error')
//     }
//     else {
//         console.log('success')
//     }
// })

// //同步追加
// fs.appendFileSync('./hhh.txt', '\r\nsync')

//writeFile追加
//{flag:'a'}
fs.writeFile('./hhh.txt', '\nwriteFile', { flag: 'a' }, err => {
    if (err) {
        console.log('error')
    }
    else {
        console.log('success')
    }
})