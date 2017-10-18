// 针对数据库中集合stu的模型

// 引入模块
var mongoose = require('../config/db_config')

// 创建骨架 Schema
var userSchema = new mongoose.Schema({
	// 用户名
	uname: {
		// 数据类型
		type: String,

		// 唯一性数据
		unique: true
	},

	// 手机号
	tel: {
		type: String,
		default: ''
	},

	// 密码
	pwd: {
		type: String,
		default: ''
	},

	// 用户头像
	img: {
		type: String,
		default: '/imgs/zpf_loginimg.png'
	},


	// // 登录状态 0 未登录  1 已登录
	// status: {
	// 	type: String,
	// 	default: '1'
	// }

});

// 创建模型
// 相当于以stuSchema为原型，创建集合stus
var userModel = mongoose.model('user', userSchema);

// 将模型向外暴露
module.exports = userModel;