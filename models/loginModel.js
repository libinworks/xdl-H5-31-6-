// 针对数据库中集合stu的模型

// 引入模块
var mongoose = require('../config/db_config')

// 创建骨架 Schema
var loginSchema = new mongoose.Schema({
	// 用户名
	username: {
		// 数据类型
		type: String,
		unique: true
	},
	// 手机号
	tel: {
		type: Number
	},
	//密码
	pwd: {
		type: String
	}, 
	// 创建时间
	createTime: {
		type: Date,
		default: Date.now
	},
	// 最后一次登陆时间
	LastloginTime: {
		type: Date,
		default: Date.now
	},
	// 最后一次退出
	LastoutTime: {
		type: Date,
		default: Date.now
	},
	// 最后一次登陆IP
	LastLoginIp: {
		type: String
	},
	// 用户信息ID
	userID: {
		type: 'ObjectId',
		ref: 'user'
	}

});




// 创建模型
// 相当于以stuSchema为原型，创建集合stus
var loginModel = mongoose.model('login', loginSchema,'login');

// 将模型向外暴露
module.exports = loginModel;