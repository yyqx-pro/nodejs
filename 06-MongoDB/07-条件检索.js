const mongoose = require('mongoose')

//连接mongodb服务
mongoose.connect('mongodb://127.0.0.1:27017/user')//user是数据库名称表示在当前数据库操作

//回调
mongoose.connection.once('open', () => {
    console.log('open')
    //1.创建文档结构对象
    let BookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number
    })
    //2.创建模型对象
    let BookModel = mongoose.model('books', BookSchema)

    //条件检索
    //lt:less then
    //gt:great then
    BookModel.find({ price: { $lt: 3000 } })
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
        })

    //逻辑检索
    //or,and
    BookModel.find({ $or: [{ name: 'yyqx4' }, { price: { $gt: 2000 } }] })
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
        })

    //正则匹配
    BookModel.find({ name: /yyqx/ })
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
        })
})

mongoose.connection.on('error', () => {
    console.log('error')
})

mongoose.connection.on('close', () => {
    console.log('close')
})
