const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')

const app = express()

//设置session中间件
app.use(session({
    name: 'sid', //设置cookie的name，默认值是：connect.sid
    secret: 'atguigu', //参与加密的字符串（又称签名）
    saveUninitialized: false, //是否为每次请求都设置一个cookie用来存储session的id
    resave: true, //是否在每次请求时重新保存session
    store: MongoStore.create({
        mongoUrl: 'mongodb://127.0.0.1:27017/bilibili' //数据库的连接配置
    }),
    cookie: {
        httpOnly: true, // 开启后前端无法通过 JS 操作
        maxAge: 1000 * 30 // 这一条 是控制 sessionID 的过期时间的！！！
    },
}))

//session的设置
app.get('/login', (req, res) => {
    if (req.query.username === 'admin' && req.query.password === 'admin') {
        req.session.username = 'admin'
        req.session.uid = '235bj4tj3bt'
        res.send('登陆成功')
    }
    else {
        res.send('登陆失败')
    }
})

//session的读取
app.get('/get', (req, res) => {
    if (req.session.username) {
        res.send('欢迎你')
    }
    else {
        res.send('请重新登录')
    }
})

//session的销毁
app.get('/destroy', (req, res) => {
    req.session.destroy(()=>{
        res.send('退出成功')
    })
})


app.listen(3000, () => {
    console.log('3000 open')
})



