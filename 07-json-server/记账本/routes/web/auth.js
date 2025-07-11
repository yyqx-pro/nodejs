var express = require('express');
var router = express.Router();
const UserModel = require('../../models/UserModel')
const md5 = require('md5')//加密密码

router.get('/reg', (req, res) => {
  res.render('auth/reg')
})

router.post('/reg', (req, res) => {
  UserModel.create({...req.body,password:md5(req.body.password)})
    .then(data => {
      console.log(data)
      res.render('success', { msg: '注册成功', url: '/login' })
    })
    .catch(err => {
      res.status(500).send('注册失败~~~');
    })
})

router.get('/login', (req, res) => {
  res.render('auth/login')
})

router.post('/login', (req, res) => {
  UserModel.findOne({username:req.body.username,password:md5(req.body.password)})
  .then(data=>{
    if(!data)
    {
      res.send('该用户不存在')
    }
    else{
      console.log(data)
      req.session.username = data.username
      req.session.password = data.password
      req.session.id = data._id
      res.render('success',{msg:'登陆成功',url:'/account'})
    }
  })
  .catch(err=>{
    console.log(err)
    res.status(500).send('操作失败')
  })
})

router.post('/logout',(req,res)=>{
  req.session.destroy(()=>{
    res.render('success',{msg:'退出成功',url:'/login'})
  })
})

module.exports = router;
