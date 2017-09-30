// 路由文件，只负责业务的中转
var express = require('express');
var router = express.Router();

// 加载对应的控制器
var index = require('../controllers/index')

/* GET home page. */
router.get('/', index.index);

// 自定义路由
router.get('/test', function(req, res) {
	// 设置响应
	res.render('test')
})

module.exports = router;
