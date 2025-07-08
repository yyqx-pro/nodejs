const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

//中间件函数
function recordMiddleware(req, res, next) {
    let { url, ip } = req
    fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url} ${ip}\n`)
    next();
}

//必须要使用
app.use(recordMiddleware)

app.get('/home', (req, res) => {
    res.send('首页')
})

app.get('/admin', (req, res) => {
    res.send('后台')
})

app.use((req, res) => {
    res.end('not find')
})

app.listen(9000, () => {
    console.log('9000 open')
})