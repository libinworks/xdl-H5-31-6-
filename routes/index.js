var express = require('express');
var router = express.Router();

// 加载控制器
var index = require('../controllers/index')

/* GET home page. */
//分配路由
router.get('/', index.index);

//分配动态路由
router.get('/pd',index.pd);

//分配相关路由
router.get('/rv',index.rv);


module.exports = router;
