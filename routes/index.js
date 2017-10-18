var express = require('express');
var router = express.Router();

// 加载控制器
var index = require('../controllers/index');

/* GET home page. */
router.get('/', index.index);
//帮助
router.get('/help', index.help);
//个人主页
router.get('/personalPage', index.personalPage);
// 百岁榜
router.get('/baisuibang', index.baisuibang);
// 登录验证
router.post('/checkUser', index.checkUser);

// 登录成功
router.get('/loginSuccess',index.loginSuccess)

// 注册 验证用户名
router.get('/checkUserName',index.checkUserName);

// 处理用户注册的数据
router.post('/reg',index.reg);

// 退出登录
router.get('/lognUp',index.lognUp);

// 登录验证
router.post('/checkUser', index.checkUser);

// 登录成功
router.get('/loginSuccess',index.loginSuccess)

// 注册 验证用户名
router.get('/checkUserName',index.checkUserName);

// 处理用户注册的数据
router.post('/reg',index.reg);

// 退出登录
router.get('/lognUp',index.lognUp);

module.exports = router;
