var express = require('express');
var router = express.Router();

// 加载控制器
var xuexi = require('../controllers/xuexi');


//chd_1
router.get('/', xuexi.xuexi_1);

//chd_2
router.get('/xuexi_2', xuexi.xuexi_2);

//chd_3
router.get('/xuexi_3', xuexi.xuexi_3);

//chd_4
router.get('/xuexi_4', xuexi.xuexi_4);

//chd_5
router.get('/xuexi_5', xuexi.xuexi_5);

//chd_6
router.get('/xuexi_6', xuexi.xuexi_6);
module.exports = router;
