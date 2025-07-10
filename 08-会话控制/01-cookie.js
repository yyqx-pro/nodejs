const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())

app.get('/set-cookie',(req,res)=>{
    //设置cookie
    res.cookie('name','wyt')//会在浏览器关闭的时候销毁
    res.cookie('age','21')

    // res.cookie('name','wyt',{maxAge:60*1000})//maxAge:cookie保存时间

    res.send('set-cookie')
})

app.get('/clear-cookie',(req,res)=>{
    //删除cookie
    res.clearCookie('age')

    res.send('clear-cookie')
})

app.get('/get-cookie',(req,res)=>{
    //获取cookie
    console.log(req.cookies)
    res.send('get-cookie')
})

app.listen(3000,()=>{
    console.log('3000 open')
})



