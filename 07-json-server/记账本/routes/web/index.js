var express = require('express');
var router = express.Router();
//导入 moment
const moment = require('moment');
const AccountModel = require('../../models/AccountModel');


//记账本的列表
router.get('/account', function (req, res, next) {
  //获取所有的账单信息
  // let accounts = db.get('accounts').value();
  //读取集合信息
  AccountModel.find().sort({time:-1})
  .then(data=>{
    res.render('list', { accounts: data, moment: moment });
  })
  .catch(err=>{
    res.status(500).send('读取失败~~~');
  })
});

//添加记录
router.get('/account/create', function (req, res, next) {
  res.render('create');
});

//新增记录
router.post('/account', (req, res) => {
  //插入数据库
  AccountModel.create({
    ...req.body,
    time:moment(req.body.time).toDate()
  })
  .then((data)=>{
    console.log(data)
    res.render('success',{ msg: '添加成功哦~~~', url: '/account' })
  })
  .catch(err=>{
    res.status(500).send('插入失败')
  })
  
});

//删除记录
router.get('/account/:id', (req, res) => {
  //获取 params 的 id 参数
  let id = req.params.id;
  // //删除
  AccountModel.deleteOne({_id:id})
  .then(data=>{
    res.render('success', { msg: '删除成功~~~', url: '/account' });
  })
  .catch(err=>{
    res.status(500).send('删除失败~');
  })
});

module.exports = router;
