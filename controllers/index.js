// 对应index路由的控制器
var index = {};

// 加载user模型
var userModel = require('../models/userModel');

// 定义方法
index.index = function(req, res) {
	userModel.findOne({status : '1'},function(err,data){
		if(!err && data){
			// 分配数据
			res.render('index',{data:data,st:1});
		}else{
			res.render('index',{st:0});
		}
	})
	// res.render('index');
}
<<<<<<< HEAD
=======

index.help = function(req,res){
	userModel.findOne({status : '1'},function(err,data){
		if(!err && data){
			// 分配数据
			res.render('lb_help',{data:data,st:1});
		}else{
			res.render('lb_help',{st:0});
		}
	})
}
index.personalPage = function(req,res){
	userModel.findOne({status : '1'},function(err,data){
		if(!err && data){
			// 分配数据
			res.render('lb_self',{data:data,st:1});
		}else{
			res.render('lb_self',{st:0});
		}
	})
}
>>>>>>> 完成
// 加载用户注册页面
// index.reg = function(req, res) {
	
// }

// 验证登录信息
index.checkUser = function(req,res){
	var uname = req.body.uname.trim();
	var pwd = req.body.pwd.trim();
	
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
					res.send('ok');
					// 改变登录状态
					userModel.update(con,{$set:{'status':'1'}},function(err,data){
						if(!err && data){
							//更改成功
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
<<<<<<< HEAD

// 登录成功
index.loginSuccess = function(req,res){
	var uname = req.query.uname.trim();
	userModel.findOne({uname : uname},function(err,data){
		if(!err && data){
			// 分配数据
			res.render('header',{data:data});
		}
	})
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
	userModel.findOne({uname:uname},function(err,data){
		if(!err && data){
			// 说明账户已经存在
			res.send('used');
		}else{
			// 该用户不存在 可用
			res.send('ok');
=======

// 登录成功
index.loginSuccess = function(req,res){
	var uname = req.query.uname.trim();
	userModel.findOne({uname : uname},function(err,data){
		if(!err && data){
			// 分配数据
			res.render('header',{data:data});
>>>>>>> 完成
		}
	})
}

<<<<<<< HEAD
=======
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
	userModel.findOne({uname:uname},function(err,data){
		if(!err && data){
			// 说明账户已经存在
			res.send('used');
		}else{
			// 该用户不存在 可用
			res.send('ok');
		}
	})
}

>>>>>>> 完成
//处理用户注册的数据
index.reg = function(req,res){

	// 参数
	var user = {
		uname: req.body.reg_uname.trim(),
		tel: req.body.reg_tel,
		pwd: req.body.reg_pwd
	}

	// 创建数据
	userModel.create(user, function(err, data) {
		// console.log(err);
		// console.log(data);
		if (!err && data){
			// 注册成功，跳转首页
			res.redirect('/');
			// res.send('ok');
		} else {
			// 跳转回注册页面
			res.redirect('back')
		}
	})
}

// 退出登录方法
index.lognUp = function(req,res){
	var uname = req.query.uname.trim();

	userModel.update({uname:uname},{$set:{status:'0'}},function(err,data){
		// console.log(err);
		// console.log(data);
		if(!err && data){
			// 退出登录成功，跳转首页
			// res.redirect('/');
			res.send('ok');
		}
	})
}


// 向外导出
module.exports = index;