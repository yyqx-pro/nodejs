var express = require('express');
var router = express.Router();
//导入 moment
const moment = require('moment');
const AccountModel = require('../../models/AccountModel');
const checkTokenMiddleware = require('../../middlewares/checkTokenMiddleware')


//记账本的列表
router.get('/account', checkTokenMiddleware, function (req, res, next) {
    //获取所有的账单信息
    // let accounts = db.get('accounts').value();
    //读取集合信息
    AccountModel.find().sort({ time: -1 })
        .then(data => {
            res.json({
                code: '0000',
                msg: '读取成功',
                data: data
            })
        })
        .catch(err => {
            res.json({
                code: '1001',
                msg: '读取失败',
                data: null
            })
        })
});


//新增记录
router.post('/account',checkTokenMiddleware, (req, res) => {
    //插入数据库
    AccountModel.create({
        ...req.body,
        time: moment(req.body.time).toDate()
    })
        .then(data => {
            res.json({
                code: '0000',
                msg: '添加成功',
                data: data
            })
        })
        .catch(err => {
            res.json({
                code: '1001',
                msg: '添加失败',
                data: null
            })
        })

});

//删除记录
router.delete('/account/:id',checkTokenMiddleware, (req, res) => {
    //获取 params 的 id 参数
    let id = req.params.id;
    // //删除
    AccountModel.deleteOne({ _id: id })
        .then(data => {
            res.json({
                code: '0000',
                msg: '删除成功',
                data: data
            })
        })
        .catch(err => {
            res.json({
                code: '1001',
                msg: '删除失败',
                data: null
            })
        })
});

//获取单个账单信息
router.get('/account/:id',checkTokenMiddleware, (req, res) => {
    //获取 params 的 id 参数
    let id = req.params.id;
    // //删除
    AccountModel.findById(id)
        .then(data => {
            res.json({
                code: '0000',
                msg: '读取成功',
                data: data
            })
        })
        .catch(err => {
            res.json({
                code: '1001',
                msg: '读取失败',
                data: null
            })
        })
});

//更新账单
router.patch('/account/:id',checkTokenMiddleware, (req, res) => {
    let id = req.params.id

    AccountModel.updateOne({ _id: id }, req.body)
        .then(data => {
            AccountModel.findById(id)
                .then(data => {
                    res.json({
                        code: '0000',
                        msg: '更新成功',
                        data: data
                    })
                })
                .catch(err => {
                    res.json({
                        code: '1001',
                        msg: '读取失败',
                        data: null
                    })
                })
        })
        .catch(err => {
            res.json({
                code: '1001',
                msg: '更新失败',
                data: null
            })
        })
})

module.exports = router;
