// 新建一个文件，写入内容

//1.导入fs模块
const fs = require('fs')

//2.写入文件:异步写入
fs.writeFile('./hhh.txt','hello,nodejs',err=>{
    //写入失败，err为错误信息
    //写入成功则为null
    if(err)
    {
        console.log('写入失败')
    }else{
        console.log('写入成功')
    }
})