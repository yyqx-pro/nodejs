const fs = require('fs')
const path = require('path')

console.log(path.resolve(__dirname,'./index.html'))//D:\code\nodejs\02-fs\index.html

//sep分隔符
console.log(path.sep)

//parse
console.log(__filename)//D:\code\nodejs\02-fs\12-path.js

let str = "D:\\code\\nodejs\\02-fs\\12-path.js"
console.log(path.parse(str))
// {
//   root: 'D:\\',
//   dir: 'D:\\code\\nodejs\\02-fs',
//   base: '12-path.js',
//   ext: '.js',
//   name: '12-path'
// }

console.log(path.basename(str))//12-path.js
console.log(path.dirname(str))//D:\code\nodejs\02-fs
console.log(path.extname(str))//.js
