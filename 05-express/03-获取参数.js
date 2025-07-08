const express = require('express')

const app = express()

app.get('/request',(req,res)=>{
    //获取请求方法
    console.log(req.method)
    //url
    console.log(req.url)//   /request?a=100&b=200
    //httpVersion
    console.log(req.httpVersion)
    //headers
    console.log(req.headers)

    console.log(req.path)//   /request
    console.log(req.query)//[Object: null prototype] { a: '100', b: '200' }
    console.log(req.ip)

    //获取某一个请求头
    console.log(req.get('host'))//localhost:9000


    res.end('request')
})

app.listen(9000,()=>{
    console.log('9000 open')
})