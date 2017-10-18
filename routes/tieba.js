var express = require('express');
var router = express.Router();

// 加载控制器
var zl = require('../controllers/tieba');



router.get('/', zl.tieba);


router.get('/jianshen', zl.jianshen);


router.get('/self', zl.self);


module.exports = router;
