// 对应index路由的控制器
var xuexi = {};

// 加载user模型
var userModel = require('../models/userModel');


xuexi.xuexi_1 = function(req,res){
	userModel.findOne({status : '1'},function(err,data){
		if(!err && data){
			// 分配数据
			res.render('chd_1',{data:data,st:1});
		}else{
			res.render('chd_1',{st:0});
		}
	})
}
xuexi.xuexi_2 = function(req,res){
	userModel.findOne({status : '1'},function(err,data){
		if(!err && data){
			// 分配数据
			res.render('chd_2',{data:data,st:1});
		}else{
			res.render('chd_2',{st:0});
		}
	})
}
xuexi.xuexi_3 = function(req,res){
	userModel.findOne({status : '1'},function(err,data){
		if(!err && data){
			// 分配数据
			res.render('chd_3',{data:data,st:1});
		}else{
			res.render('chd_3',{st:0});
		}
	})
}
xuexi.xuexi_4 = function(req,res){
	userModel.findOne({status : '1'},function(err,data){
		if(!err && data){
			// 分配数据
			res.render('chd_4',{data:data,st:1});
		}else{
			res.render('chd_4',{st:0});
		}
	})
}
xuexi.xuexi_5 = function(req,res){
	userModel.findOne({status : '1'},function(err,data){
		if(!err && data){
			// 分配数据
			res.render('chd_5',{data:data,st:1});
		}else{
			res.render('chd_5',{st:0});
		}
	})
}
xuexi.xuexi_6 = function(req,res){
	userModel.findOne({status : '1'},function(err,data){
		if(!err && data){
			// 分配数据
			res.render('chd_6',{data:data,st:1});
		}else{
			res.render('chd_6',{st:0});
		}
	})
}



// 向外导出
module.exports = xuexi;