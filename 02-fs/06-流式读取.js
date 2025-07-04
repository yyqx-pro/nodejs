const fs = require('fs')

const rs = fs.createReadStream('./hhh.txt')

rs.on('data',chunk=>{
    console.log(chunk.length)//一次读取64KB
    console.log(chunk.toString())
})


//读取完成之后触发end事件
rs.on('end',()=>{
    console.log('读取完成')
})