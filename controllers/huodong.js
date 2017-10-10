var huodong = {};
var userModel = require('../models/userModel');

huodong.huodong = function (req,res){ 
	res.render('sq_huodong');
};

huodong.huodong2 = function (req,res){ 
	res.render('sq_huodong2');
};

huodong.huodong3 = function (req,res){
	res.render('sq_huodong3');
};

huodong.huodongUser = function(req,res){ 
	res.render('sq_huodong_user');
};


module.exports = huodong;