const express = require('express')
const app = express()
const bodyParser = express('body-parser')

// //解析json格式的请求体中间件
// const jsonParser = express.json()

//解析querystring格式请求的中间件
const urlencodedParser = express.urlencoded({ extended: true })

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/login', urlencodedParser, (req, res) => {
    res.send(`${req.body.name},${req.body.password}`)
})

app.listen(9000, () => {
    console.log('9000 open')
})