// 话题模块操作的路由

var express = require('express');
var router = express.Router();


// 引入话题控制器
var topic = require('../controllers/topic')

// router.get('/ybb_index',topic.create);

// 创建话题页面
// router.get('/create', topic.create);

// 处理添加的话题数据
router.get('/doCreate', topic.doCreate);

// 话题详情页
// router.get('/details/:_id', topic.details);


module.exports = router;