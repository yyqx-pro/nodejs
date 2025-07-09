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

    //单独查找
    BookModel.findOne({ name: 'yyqx4' })
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
        })

    //id查找
    BookModel.findById('686e38222e4a4f2e37921010')
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
        })

    //批量查找
    BookModel.find({ price: 4000 })
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
        })

    //全部读取
    BookModel.find()
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
