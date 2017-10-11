// 对应index路由的控制器
var indexa = {};

// 加载stu模型
var userModel = require('../models/userModel');

// 健康知识测验
indexa.qwe = function(req,res){
	res.render('zgq_answer');
}

indexa.zxc = function(req,res){
	res.render('zgq_healthy');
}
indexa.asd = function(req,res){
	res.render('zgq_indexs');
}

indexa.zaq = function(req,res){
	res.render('zgq_hospital');
}
indexa.xsw = function(req,res){
	res.render('zgq_journalism');
}
indexa.cde = function(req,res){
	res.render('zgq_konwledgetest');
}
indexa.vfr = function(req,res){
	res.render('zgq_recipes');
}

indexa.bgt = function(req,res){
	res.render('zgq_recommend');
}

// 向外导出
module.exports = indexa;