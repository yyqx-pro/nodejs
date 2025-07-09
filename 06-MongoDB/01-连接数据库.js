const mongoose = require('mongoose')

//连接mongodb服务
mongoose.connect('mongodb://127.0.0.1:27017/user')//user是数据库名称表示在当前数据库操作

//回调
// mongoose.connection.on('open',()=>{
//     console.log('open')
// })
//open推荐用once
mongoose.connection.once('open',()=>{
    console.log('open')
})

mongoose.connection.on('error',()=>{
    console.log('error')
})

mongoose.connection.on('close',()=>{
    console.log('close')
})

//关闭连接
setTimeout(() => {
    mongoose.disconnect()
}, 3000);