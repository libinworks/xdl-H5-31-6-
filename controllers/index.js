// 对应index路由的控制器
var index = {};

// 加载stu模型
var stuModel = require('../models/stuModel');

// 定义方法
index.index = function(req, res) {
	//响应index视图模板
	res.render('index')

}
// 加载用户注册页面
index.reg = function(req, res) {
	
}

// 向外导出
module.exports = index;