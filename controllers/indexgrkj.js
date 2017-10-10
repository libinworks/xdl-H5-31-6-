// 对应index路由的控制器
var indexgrkj = {};

// 加载user模型
var userModel = require('../models/userModel');

indexgrkj.mp = function(req, res) {
	userModel.findOne({status : '1'},function(err,data){
		if(!err && data){
			// 分配数据
			res.render('ybb_index_mp',{data:data,st:1});
		}else{
			res.render('ybb_index_mp',{st:0});
		}
	})
	// res.render('index');
}

//定义我的勋章的方法
indexgrkj.ma = function(req, res) {
	userModel.findOne({status : '1'},function(err,data){
		if(!err && data){
			// 分配数据
			res.render('ybb_index_ma',{data:data,st:1});
		}else{
			res.render('ybb_index_ma',{st:0});
		}
	})
	// res.render('index');
}

//定义我的商城的方法
indexgrkj.sc = function(req, res) {
	userModel.findOne({status : '1'},function(err,data){
		if(!err && data){
			// 分配数据
			res.render('ybb_index_sc',{data:data,st:1});
		}else{
			res.render('ybb_index_sc',{st:0});
		}
	})
	// res.render('index');
}

indexgrkj.sy = function(req, res) {
	userModel.findOne({status : '1'},function(err,data){
		if(!err && data){
			// 分配数据
			res.render('ybb_index',{data:data,st:1});
		}else{
			res.render('ybb_index',{st:0});
		}
	})
	// res.render('index');
}

indexgrkj.mbf = function(req, res) {
	userModel.findOne({status : '1'},function(err,data){
		if(!err && data){
			// 分配数据
			res.render('ybb_index_mbf',{data:data,st:1});
		}else{
			res.render('ybb_index_mbf',{st:0});
		}
	})
	// res.render('index');
}

indexgrkj.pd = function(req, res) {
	userModel.findOne({status : '1'},function(err,data){
		if(!err && data){
			// 分配数据
			res.render('ybb_index_pd',{data:data,st:1});
		}else{
			res.render('ybb_index_pd',{st:0});
		}
	})
	// res.render('index');
}

indexgrkj.rv = function(req, res) {
	userModel.findOne({status : '1'},function(err,data){
		if(!err && data){
			// 分配数据
			res.render('ybb_index_rv',{data:data,st:1});
		}else{
			res.render('ybb_index_rv',{st:0});
		}
	})
	// res.render('index');
}
// 向外导出
module.exports = indexgrkj;