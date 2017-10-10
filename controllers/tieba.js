// 对应index路由的控制器
var zl = {};

// 加载user模型
var userModel = require('../models/userModel');


zl.tieba = function(req,res){
	userModel.findOne({status : '1'},function(err,data){
		if(!err && data){
			// 分配数据
			res.render('zhanglutiba04',{data:data,st:1});
		}else{
			res.render('zhanglutiba04',{st:0});
		}
	})
}
zl.jianshen = function(req,res){
	userModel.findOne({status : '1'},function(err,data){
		if(!err && data){
			// 分配数据
			res.render('zl_1',{data:data,st:1});
		}else{
			res.render('zl_1',{st:0});
		}
	})
}
zl.self = function(req,res){
	userModel.findOne({status : '1'},function(err,data){
		if(!err && data){
			// 分配数据
			res.render('lb_self',{data:data,st:1});
		}else{
			res.render('lb_self',{st:0});
		}
	})
}
// 向外导出
module.exports = zl;