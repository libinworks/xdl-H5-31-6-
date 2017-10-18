var express = require('express');
var router = express.Router();

// 加载新闻控制器
var news = require('../controllers/news');

// 新闻首页
router.get('/',news.news);

// 健康
router.get('/jk',news.newsJk);

// 推荐
router.get('/tj',news.newsTj);

// 推荐3级页
router.get('/tj3',news.newsTj3); 

// 文史
router.get('/ws',news.newsWs);

router.get('/hduser',news.newsHduser);


module.exports = router;
