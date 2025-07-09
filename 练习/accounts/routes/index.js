var express = require('express');
var router = express.Router();

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(__dirname + '/../data/db.json')
const db = low(adapter)

const shortid = require('shortid')

//记帐本列表
router.get('/accounts', function (req, res, next) {
  res.render('list',{accounts:accounts})
});

//添加记录
router.get('/accounts/create', function (req, res, next) {
  res.render('create')
});

router.post('/accounts', (req, res) => {
  //生成id
  let id = shortid.generate()
  console.log(req.body, db.get('accounts').value())
  db.get('accounts').unshift({ id: id, ...req.body }).write()
  res.render('success')
})

module.exports = router;
