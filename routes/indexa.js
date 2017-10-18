var express = require('express');
var router = express.Router();

// 加载控制器
var indexa = require('../controllers/indexa')


// 健康知识测验
router.get('/qwe', indexa.qwe);

// 健康
router.get('/', indexa.zxc);

// 健康》医院
router.get('/asd', indexa.asd);

// 豉汁煎海虾
router.get('/zaq', indexa.zaq);

// 新闻
router.get('/xsw', indexa.xsw);

// 健康》健康知识测验
router.get('/cde', indexa.cde);

// 健康》医疗食谱
router.get('/vfr', indexa.vfr);

// 推荐医疗食谱
router.get('/bgt', indexa.bgt);


module.exports = router;
