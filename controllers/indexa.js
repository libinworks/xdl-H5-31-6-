// 对应index路由的控制器
var indexa = {};

// 加载stu模型
var userModel = require('../models/userModel');

// 健康知识测验
indexa.qwe = function(req,res){
	userModel.findOne({status : '1'},function(err,data){
		if(!err && data){
			// 分配数据
			res.render('zgq_answer',{data:data,st:1});
		}else{
			res.render('zgq_answer',{st:0});
		}
	})
}

indexa.zxc = function(req,res){
	userModel.findOne({status : '1'},function(err,data){
		if(!err && data){
			// 分配数据
			res.render('zgq_healthy',{data:data,st:1});
		}else{
			res.render('zgq_healthy',{st:0});
		}
	})
}
indexa.asd = function(req,res){
	userModel.findOne({status : '1'},function(err,data){
		if(!err && data){
			// 分配数据
			res.render('zgq_indexs',{data:data,st:1});
		}else{
			res.render('zgq_indexs',{st:0});
		}
	})
}

indexa.zaq = function(req,res){
	userModel.findOne({status : '1'},function(err,data){
		if(!err && data){
			// 分配数据
			res.render('zgq_hospital',{data:data,st:1});
		}else{
			res.render('zgq_hospital',{st:0});
		}
	})
}
indexa.xsw = function(req,res){
	userModel.findOne({status : '1'},function(err,data){
		if(!err && data){
			// 分配数据
			res.render('zgq_journalism',{data:data,st:1});
		}else{
			res.render('zgq_journalism',{st:0});
		}
	})
}
indexa.cde = function(req,res){
	userModel.findOne({status : '1'},function(err,data){
		if(!err && data){
			// 分配数据
			res.render('zgq_konwledgetest',{data:data,st:1});
		}else{
			res.render('zgq_konwledgetest',{st:0});
		}
	})
}
indexa.vfr = function(req,res){
	userModel.findOne({status : '1'},function(err,data){
		if(!err && data){
			// 分配数据
			res.render('zgq_recipes',{data:data,st:1});
		}else{
			res.render('zgq_recipes',{st:0});
		}
	})
}

indexa.bgt = function(req,res){
	userModel.findOne({status : '1'},function(err,data){
		if(!err && data){
			// 分配数据
			res.render('zgq_recommend',{data:data,st:1});
		}else{
			res.render('zgq_recommend',{st:0});
		}
	})
}

// 向外导出
module.exports = indexa;