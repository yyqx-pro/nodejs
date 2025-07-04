const fs = require('fs')

fs.stat('../练习/01-文件复制.js',(err,data)=>{
    if(err)
    {
        console.log('error')
        return;
    }
    console.log(data)

    //获取文件类型
    console.log(data.isFile())//true
    console.log(data.isDirectory())//false
})