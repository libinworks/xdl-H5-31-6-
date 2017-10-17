//定义新闻对应的路由器
var news = {};


var userModel = require('../models/userModel');
//定义路由方法
news.news = function (req,res){ 
	res.render('sq_news');
};

news.newsJk = function (req,res){
	res.render('sq_news_childpage_jk');
};

news.newsTj = function (req,res){ 
	res.render('sq_news_childpage_tj');
};

news.newsTj3 = function (req,res){ 
	res.render('sq_news_childpage_tj_3');
};
news.newsWs = function (req,res){ 
	res.render('sq_news_childpage_ws')
};

news.newsHduser = function (req,res){ 
	res.render('sq_huodong_user')
};

module.exports = news;

