const fs = require('fs')

//异步读取
fs.readFile('./hhh.txt',(err,data)=>{
    if(err)
    {
        console.log('error')
    }else{
        console.log(data.toString())
    }
})

//同步读取
const data = fs.readFileSync('./hhh.text')
console.log(data.toString())