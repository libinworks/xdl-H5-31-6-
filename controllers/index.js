// 对应index路由的控制器
var index = {};

// 加载user模型
var userModel = require('../models/userModel');
var loginModel = require('../models/loginModel');

var cryptoStr = require('../config/crypto_config');

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
	
	// 条件
	var con = {
		uname: uname
	}
	var cons = {
		uname: uname,
		pwd: pwd
	}
	// 验证该用户是否存在
	userModel.findOne(con, function(err, data){
		// console.log(data);
		if (!err && data) {
			// 说明账户已经存在了，判断登录密码是否正确
			userModel.findOne(cons,function(err,data){
				// 如果没错误 并且存在登录成功
				if(!err && data){
					req.session.user = data;
					res.send('ok');

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
	req.session.user = null;
	res.send('ok');

}


// 向外导出
module.exports = index;