// 对应index路由的控制器
var indexgrkj = {};

// 加载user模型
var userModel = require('../models/userModel');

indexgrkj.mp = function(req, res) {
	res.render('ybb_index_mp');
}

//定义我的勋章的方法
indexgrkj.ma = function(req, res) {
	res.render('ybb_index_ma');
}

//定义我的商城的方法
indexgrkj.sc = function(req, res) {
	res.render('ybb_index_sc');
}

indexgrkj.sy = function(req, res) {
	res.render('ybb_index');
}

indexgrkj.mbf = function(req, res) {
	res.render('ybb_index_mbf');
}

indexgrkj.pd = function(req, res) {
	res.render('ybb_index_pd');
}

indexgrkj.rv = function(req, res) {
	res.render('ybb_index_rv');
}
// 向外导出
module.exports = indexgrkj;