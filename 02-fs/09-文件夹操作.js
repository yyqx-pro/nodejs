const fs = require('fs')

//创建文件夹
// fs.mkdir('./html',err=>{
//     if(err)
//     {
//         console.log('error')
//     }else{
//         console.log('success')
//     }
// })

//递归创建文件夹
// fs.mkdir('./a/b/c',{recursive:true},err=>{
//     if(err)
//     {
//         console.log('error')
//     }else{
//         console.log('success')
//     }
// })

//读取文件夹
// fs.readdir('../02-fs',(err,data) => {
//     if (err) {
//         console.log('error')
//     } else {
//         console.log('success')
//         console.log(data)
//     }
// })

//删除文件夹
// fs.rmdir('./html',err => {
//     if (err) {
//         console.log('error')
//         console.log(err)
//     } else {
//         console.log('success')
//     }
// })

//递归删除文件夹
fs.rm('./a',{recursive:true},err => {
    if (err) {
        console.log('error')
        console.log(err)
    } else {
        console.log('success')
    }
})