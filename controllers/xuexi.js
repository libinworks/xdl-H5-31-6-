// 对应index路由的控制器
var xuexi = {};

// 加载user模型
var userModel = require('../models/userModel');


xuexi.xuexi_1 = function(req,res){
	res.render('chd_1');
}
xuexi.xuexi_2 = function(req,res){
	res.render('chd_2');
}
xuexi.xuexi_3 = function(req,res){
	res.render('chd_3');
}
xuexi.xuexi_4 = function(req,res){
	res.render('chd_4');
}
xuexi.xuexi_5 = function(req,res){
	res.render('chd_5');
}
xuexi.xuexi_6 = function(req,res){
	res.render('chd_6');
}

// 向外导出
module.exports = xuexi;