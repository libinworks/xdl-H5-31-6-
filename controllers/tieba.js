// 对应index路由的控制器
var zl = {};

// 加载user模型
var userModel = require('../models/userModel');


zl.tieba = function(req,res){
	res.render('zhanglutiba04');
}
zl.jianshen = function(req,res){
	res.render('zl_1');
}
zl.self = function(req,res){
	res.render('lb_self');
}
// 向外导出
module.exports = zl;