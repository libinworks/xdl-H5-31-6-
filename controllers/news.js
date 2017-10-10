//定义新闻对应的路由器
var news = {};


var userModel = require('../models/userModel');
//定义路由方法
news.news = function (req,res){ 
	userModel.findOne({status : '1'},function(err,data){
		if(!err && data){
			// 分配数据
			res.render('sq_news',{data:data,st:1});
		}else{
			res.render('sq_news',{st:0});
		}
	})
	// res.render('sq_news');
};

news.newsJk = function (req,res){
	userModel.findOne({status : '1'},function(err,data){
			if(!err && data){
				// 分配数据
				res.render('sq_news_childpage_jk',{data:data,st:1});
			}else{
				res.render('sq_news_childpage_jk',{st:0});
			}
		}) 
	// res.render('sq_news_childpage_jk');
};

news.newsTj = function (req,res){ 
	userModel.findOne({status : '1'},function(err,data){
		if(!err && data){
			// 分配数据
			res.render('sq_news_childpage_tj',{data:data,st:1});
		}else{
			res.render('sq_news_childpage_tj',{st:0});
		}
	})
	// res.render('sq_news_childpage_tj');
};

news.newsTj3 = function (req,res){ 
	userModel.findOne({status : '1'},function(err,data){
		if(!err && data){
			// 分配数据
			res.render('sq_news_childpage_tj_3',{data:data,st:1});
		}else{
			res.render('sq_news_childpage_tj_3',{st:0});
		}
	})
	// res.render('sq_news_childpage_tj_3');
};

news.newsWs = function (){ 
	userModel.findOne({status : '1'},function(err,data){
		if(!err && data){
			// 分配数据
			res.render('sq_news_childpage_ws',{data:data,st:1});
		}else{
			res.render('sq_news_childpage_ws',{st:0});
		}
	})
	// res.render('sq_news_childpage_ws')
};

module.exports = news;

