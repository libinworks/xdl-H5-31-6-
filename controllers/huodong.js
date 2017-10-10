var huodong = {};
var userModel = require('../models/userModel');

huodong.huodong = function (req,res){ 
	userModel.findOne({status : '1'},function(err,data){
		if(!err && data){
			// 分配数据
			res.render('sq_huodong',{data:data,st:1});
		}else{
			res.render('sq_huodong',{st:0});
		}
	})
	// res.render('sq_huodong');
};

huodong.huodong2 = function (req,res){ 
	userModel.findOne({status : '1'},function(err,data){
		if(!err && data){
			// 分配数据
			res.render('sq_huodong2',{data:data,st:1});
		}else{
			res.render('sq_huodong2',{st:0});
		}
	})
	// res.render('sq_huodong2');
};

huodong.huodong3 = function (req,res){
 	userModel.findOne({status : '1'},function(err,data){
		if(!err && data){
			// 分配数据
			res.render('sq_huodong3',{data:data,st:1});
		}else{
			res.render('sq_huodong3',{st:0});
		}
	})
	// res.render('sq_huodong3');
};

huodong.huodongUser = function(req,res){ 
	userModel.findOne({status : '1'},function(err,data){
		if(!err && data){
			// 分配数据
			res.render('sq_huodong_user',{data:data,st:1});
		}else{
			res.render('sq_huodong_user',{st:0});
		}
	})
	// res.render('sq_huodong_user');
};


module.exports = huodong;