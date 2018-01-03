var express = require('express');
var router = express.Router();

// 注册
router.use('/regist', require(__dirname + '/user/register'));

//登录
router.use('/login', require(__dirname + '/user/login'));


module.exports = router;
