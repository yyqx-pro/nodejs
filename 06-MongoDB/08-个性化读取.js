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

    //个性化查找
    //1：需要
    //0：不需要
    BookModel.find().select({ name: 1, price: 1 })
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
        })

    //排序
    //1:升序
    //-1：降序
    BookModel.find().select({ name: 1, price: 1 }).sort({ price: 1 })
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
        })


    //数据截取
    //limit(n):截取n条数据
    //skip(n):跳过n条数据
    BookModel.find().select({ name: 1, price: 1 }).sort({ price: 1 }).skip(2).limit(1)
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
