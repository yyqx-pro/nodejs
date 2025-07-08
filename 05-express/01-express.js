const express = require('express')

//创建应用对象
const app = express()

//创建路由
app.get('/home',(req,res)=>{
    res.end('get home')
})

app.listen(9000,()=>{
    console.log('9000 open')
})