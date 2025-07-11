var express = require('express');
var router = express.Router();
const UserModel = require('../../models/UserModel')
const md5 = require('md5')//加密密码\
const jwt = require('jsonwebtoken')
const { secret } = require('../../config/config')


router.post('/login', (req, res) => {
    UserModel.findOne({ username: req.body.username, password: md5(req.body.password) })
        .then(data => {
            if (!data) {
                res.json({
                    code: '2001',
                    msg: '该用户不存在',
                    data: null
                })
            }
            else {
                // jwt.sign(数据，加密字符串，配置对象)
                let token = jwt.sign({
                    username: req.body.username,
                    password: req.body.password
                }, secret, {
                    expiresIn: 60 * 60 * 24 * 7
                })

                res.json({
                    code: '0000',
                    msg: '登陆成功',
                    data: token
                })
            }
        })
        .catch(err => {
            res.json({
                code: '2001',
                msg: '操作失败',
                data: null
            })
        })
})

router.post('/logout', (req, res) => {
    req.session.destroy(() => {
        res.render('success', { msg: '退出成功', url: '/login' })
    })
})

module.exports = router;
