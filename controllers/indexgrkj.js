// 对应index路由的控制器
var indexgrkj = {};

// 加载user模型
var userModel = require('../models/userModel');
// 加载adduser模型
var addModel = require('../models/addModel');
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
	//console.log(req.session.user._id)
	var con =  req.session.user
	

	//console.log(con);
	userModel.findOne(con,function(err,data){
		req.session.datas = data;
		 console.log(err,data);
		if(!err){
			res.render('ybb_index_mbf');
		}
	})
}

indexgrkj.pd = function(req, res) {
	res.render('ybb_index_pd');
}

indexgrkj.rv = function(req, res) {
	res.render('ybb_index_rv');
}

//定义添加好友的方法
indexgrkj.tj = function(req,res){
	var con =  req.session.user;
	userModel.find(function(err,data){
		 // console.log(err,data);
		if(!err && data){
			res.render('ybb_index_add',{haoyou:data});
		}
	})
}

// 加好友
indexgrkj.add = function(req,res){
	
	var con = req._parsedUrl.query.slice(1,req._parsedUrl.query.length);
	var logincon ={
		addid: req.session.user._id
	}	
	userModel.update(logincon,{$push:{addusers:con}},function(err){
		if(!err){
			res.render('ybb_index_jz');
		}
	})
	
}
// 向外导出
module.exports = indexgrkj;