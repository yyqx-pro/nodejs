const jwt = require('jsonwebtoken')
const {secret} = require('../config/config')
module.exports = (req, res, next) => {
    let token = req.get('token')
    if (!token) {
        return res.json({
            code: '2001',
            msg: 'token为空',
            data: null
        })
    }
    jwt.verify(token, secret, (err, data) => {
        if (err) {
            return res.json({
                code: '2004',
                msg: 'token无效',
                data: null
            })
        }
        next()
    })
}