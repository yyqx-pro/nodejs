const express = require('express')

const app = express()

app.get('/response',(req,res)=>{
    //原生响应
    // res.statusCode = 200
    // res.statusMessage = 'Not Found'
    // res.setHeader('test',['a','b','c'])
    // res.write('hello ')

    //express内置方法
    // res.status(500).set('aaa','bbb').send('hhh 你好')
    res.status(500)
    res.set('aaa','bbb')
    res.send('hhh 你好')

    res.end('response')
})

//其他响应设置
app.get('/other',(req,res)=>{
    //重定向
    // res.redirect('http://baidu.com')

    //下载
    // res.download(__dirname+'/package.json')

    //json
    // res.json({
    //     name:'易烊千玺',
    //     age:24
    // })

    //文件内容
    // res.sendFile(__dirname+'/response.html')
})

app.listen(9000,()=>{
    console.log('9000 open')
})