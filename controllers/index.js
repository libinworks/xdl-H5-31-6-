// 对应index路由的控制器
var index = {};

// 加载user模型
var userModel = require('../models/userModel');
var loginModel = require('../models/loginModel');
var cryptoStr = require('../config/crypto_config');

var uploadFile = require('../config/uploadFile_config');

// 定义方法
index.index = function(req, res) {
	res.render('index');
}

index.help = function(req,res){
	res.render('lb_help');
}
index.baisuibang = function(req,res){
	res.render('lulu');
}
index.personalPage = function(req,res){
	res.render('lb_self');
}

// 验证登录信息
index.checkUser = function(req,res){
	var uname = req.body.uname.trim();
	var pwd = cryptoStr(req.body.pwd.trim());
	// console.log(req.body.ip);
	
	// 条件
	var con = {
		username: uname
	}
	var cons = {
		username: uname,
		pwd: pwd
	}
	// 验证该用户是否存在
	loginModel.findOne(con, function(err, data){
		// console.log(data);
		if (!err && data) {
			// 说明账户已经存在了，判断登录密码是否正确
			loginModel.findOne(cons,function(err,data){
				// 如果没错误 并且存在登录成功
				if(!err && data){
					// 更改登录时间
					loginModel.update({_id:data._id},{LastloginTime:Date.now()},function(err){
						if(!err){
							loginModel.findOne({_id:data._id}).populate('userID',{username:1,userImg:1}).exec(function(err,data){

							req.session.user = data;
							res.send('ok');
					
							})
						}
					})



				}else{
					// 密码不正确 请重新输入
					res.send('upwd');
				}
			})
		} else {
			// 该账户不存在，提示用户用户名不存在，请重新填写或注册
			res.send('used');
		}
	})
}

// 登录成功
index.loginSuccess = function(req,res){
	if(!err){
		// 分配数据
		res.render('header');
	}
}

// 注册 验证用户名
index.checkUserName = function(req,res){
	var uname = req.query.uname.trim();
	if(uname == ''){
		// 发送响应
		res.send('isNull')

		// 终止程序
		return;
	}
	// 将用户提交过来的数据，与数据库中现有的数据进行对比
	loginModel.findOne({username:uname},{username:1},function(err,data){
		if(!err && data){
			// 说明账户已经存在
			res.send('used');
		}else{
			// 该用户不存在 可用
			res.send('ok');
		}
	})

}

//处理用户注册的数据
index.reg = function(req,res){
	userModel.create({username:req.body.reg_uname.trim()},function(err,data){
		if(!err && data){
			var  userId = data._id;

			// 参数
			var user = {
				username: req.body.reg_uname.trim(),
				tel: req.body.reg_tel,
				pwd: cryptoStr(req.body.reg_pwd),
				userID:data._id
			}

			loginModel.create(user,function(err,data){
				if (!err && data){

				// 传递一次性的消息
				req.flash('users',data);
				// 注册成功，跳转首页
				res.redirect('/');
				// res.send('ok');
				} else {
					// 跳转回注册页面
					res.redirect('back');
				}
			})
		}
	})

	// 创建数据
	// userModel.create(user, function(err, data) {
	// 	// console.log(err);
	// 	// console.log(data);
	// 	if (!err && data){

	// 		// 传递一次性的消息
	// 		req.flash('users',data);
	// 		// 注册成功，跳转首页
	// 		res.redirect('/');
	// 		// res.send('ok');
	// 	} else {
	// 		// 跳转回注册页面
	// 		res.redirect('back');
	// 	}
	// })
}

// 退出登录方法
index.lognUp = function(req,res){
	// 更改最后一次退出时间
	loginModel.update({_id:req.session.user._id},{LastoutTime:Date.now()},function(err){
		if(!err){
			req.session.user = null;
			res.send('ok');
		}
	});
}

// 修改资料
index.editPersonal = function(req,res){
	var con = req.query;

	loginModel.findOne(con,{LastoutTime:0,LastloginTime:0,createTime:0,tel:0}).populate('userID',{userImg:1}).exec(function(err,data){
		if(!err && data){
			res.render('editPersonal',{data:data});
		}
	})
}

// 更新资料
index.update = function(req, res) {
	// console.log(req.body);
	// console.log(req.body._id);
	// console.log(req.body.userID);
	var con = {
		_id: req.body._id
	}
	// 更新数据
	var newData = {
		pwd : cryptoStr(req.body.userpwd)
	}

	loginModel.update(con,newData,function(err){
		if (!err){
			// 用户密码更新成功之后，清除session，重新登录
			req.session.user = null;
			// 传递一次性的消息
			req.flash('users','修改成功');
			// 修改成功，跳转首页
			res.redirect('/');
			// res.send('ok');
		} else {
			// 跳转回注册页面
			res.redirect('back');
		}
	})	
}


// 修改头像
index.editImg = function(req,res){
	var con = req.query;

	loginModel.findOne(con,{LastoutTime:0,LastloginTime:0,createTime:0,tel:0}).populate('userID',{userImg:1}).exec(function(err,data){
		if(!err && data){
			res.render('editImg',{data:data});
		}
	})

	// 创建数据
	// userModel.create(user, function(err, data) {
	// 	// console.log(err);
	// 	// console.log(data);
	// 	if (!err && data){

	// 		// 传递一次性的消息
	// 		req.flash('users',data);
	// 		// 注册成功，跳转首页
	// 		res.redirect('/');
	// 		// res.send('ok');
	// 	} else {
	// 		// 跳转回注册页面
	// 		res.redirect('back');
	// 	}
	// })
}
// 修改头像
index.updateImg = function(req, res) {
	// 定义文件存储的位置
	var savePath = 'public/uploads';
	// 允许上传的文件类型
	var allowType = ['image/jpeg', 'image/png', 'image/gif'];
	// 允许上传的文件大小
	var fileSize = 1024*1024*10; 
	// 获取上传函数
	var upload = uploadFile(savePath, allowType, fileSize).single('userpic');

	// 调用上传
	upload(req, res, function(err) {
		if (err) {
			// console.log(err.code)
			switch(err.code) {
				case 'FILEFILTER':
					req.flash('fileError', '文件类型不合...')
				break;
				case 'LIMIT_FILE_SIZE':
					req.flash('fileError', '文件太大了...')
				break;
			}

			// 跳转回去
			res.redirect('back');

			return;
		}
		var con = {
			// _id: req.session.user._id
			_id: req.body.userID
		};
		var newData = {
			userImg: req.file.filename
		}
		userModel.update(con, newData, function(err) {
			if (!err) {
				// 更新session
				req.session.user = null;
				// 直接跳转
				res.redirect('/');
			}
		})
	})
}


// 向外导出
module.exports = index;