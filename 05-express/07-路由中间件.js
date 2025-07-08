const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

//中间件函数
function checkCode(req, res, next) {
    if (req.query.code) {
        next()
    } else {
        res.send('error')
    }
}

//路由中间件的使用方法是放到受约束的路由规则中
app.get('/home', checkCode, (req, res) => {
    res.send('首页')
})

app.get('/admin', checkCode, (req, res) => {
    res.send('后台')
})

app.use((req, res) => {
    res.end('not find')
})

app.listen(9000, () => {
    console.log('9000 open')
})