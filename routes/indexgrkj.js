var express = require('express');
var router = express.Router();

// 加载控制器
var indexgrkj = require('../controllers/indexgrkj');

var checkUserLogin = require('../middlewares/checkUserLogin');

//分配我的积分路由
router.get('/mp',indexgrkj.mp);

//分配我的勋章路由
router.get('/ma',indexgrkj.ma);

//分配我的商场路由
router.get('/sc',indexgrkj.sc);

router.get('/mbf',indexgrkj.mbf);


router.get('/pd',checkUserLogin,indexgrkj.pd);

router.get('/rv',indexgrkj.rv);

router.get('/sy',indexgrkj.sy);

//相册
router.post('/album', checkUserLogin,indexgrkj.album);


module.exports = router;