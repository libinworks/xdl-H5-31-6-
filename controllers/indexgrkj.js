// 对应index路由的控制器
var indexgrkj = {};

// 加载user模型
var userModel = require('../models/userModel');
var uploadFile = require('../config/uploadFile_config');
var fs = require('fs');

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
	res.render('ybb_index_mbf');
}

indexgrkj.pd = function(req, res) {
	var useId = '/upLoadImg/'+req.session.user._id;
	fs.mkdir('public'+useId,function(){});
	fs.readdir('public'+useId,function(err,files){
		if(!err && files){
			console.log(useId,'123');
			res.render('ybb_index_pd',{files:files,useId:useId});
		}
		
	});
}

indexgrkj.rv = function(req, res) {
	res.render('ybb_index_rv');
}
indexgrkj.album = function(req,res){
	// 定义文件存储的位置
	var useId = 'public/upLoadImg/'+req.session.user._id;
	// fs.mkdir(useId,function(){});
	// var savePath = 'public/upLoadImg';
	// 允许上传的文件类型
	var allowType = ['image/jpeg', 'image/png', 'image/gif'];
	// 允许上传的文件大小
	var fileSize = 1024*1024*10; 
	// 获取上传函数
	var upload = uploadFile(useId, allowType, fileSize).single('userpic');

	// 调用上传
	upload(req, res, function(err) {
		// console.log(err)
		if (err) {
			console.log(err.code)
			switch(err.code) {
				case 'FILEFILTER':
					req.flash('fileError', '文件类型不合...')
					console.log('文件类型不合...')
				break;
				case 'LIMIT_FILE_SIZE':
					req.flash('fileError', '文件太大了...')
					console.log('文件太大了...')
				break;
			}
			// 跳转回去
			res.redirect('back');

			return;
			
		}
	});
	var useId2 = '/upLoadImg/'+req.session.user._id;
	fs.readdir('public'+useId2,function(err,files){
		if(!err && files){
			res.render('ybb_index_pd',{files:files,useId:useId2});
		}
		
	});
}
// indexgrkj.albums = function(req,res){
// 	// 定义文件存储的位置
// 	var savePath = 'public/upLoadImg';
// 	// 允许上传的文件类型
// 	var allowType = ['image/jpeg', 'image/png', 'image/gif'];
// 	// 允许上传的文件大小
// 	var fileSize = 1024*1024*10; 
// 	// 获取上传函数
// 	var upload = uploadFile(savePath, allowType, fileSize).single('userpic');

// 	// 调用上传
// 	upload(req, res, function(err) {
// 		// console.log(err)
// 		if (err) {
// 			// console.log(err.code)
// 			switch(err.code) {
// 				case 'FILEFILTER':
// 					req.flash('fileError', '文件类型不合...')
// 				break;
// 				case 'LIMIT_FILE_SIZE':
// 					req.flash('fileError', '文件太大了...')
// 				break;
// 			}

// 			// 跳转回去
// 			res.redirect('back');

// 			return;
// 		}

// 		// 打印
// 		console.log(req.file)
// 	})
// }

// 向外导出
module.exports = indexgrkj;