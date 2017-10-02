var express = require('express');
var router = express.Router();

// 加载控制器
var index = require('../controllers/index')

/* GET home page. */
//分配路由
router.get('/', index.index);


module.exports = router;
