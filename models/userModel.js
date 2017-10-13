// 针对数据库中集合stu的模型

// 引入模块
var mongoose = require('../config/db_config')

// 创建骨架 Schema
var userSchema = new mongoose.Schema({
	// 用户名
	username: {
		// 数据类型
		type: String
	},
	// 用户头像
	userImg: {
		type: String,
		default: '/imgs/zpf_loginimg.png'
	},
	//来自哪里
	address: {
		type: String
	},
	//年龄
	age: {
		type: Number
	},
	// 活跃度
	activity: {
		type: Number
	},
	//我的积分
	integralID: {
		type: 'ObjectId'
	},
	// 我的好友
	fridnesID: {
		type: 'ObjectId'
	},
	// 礼物
	gift: {
		type: String
	},
	//我的勋章
	medalID: {
		type: 'ObjectId'
	},
	// 我的关注
	attentionID: {
		type: 'ObjectId'
	},
	// 我参与的活动
	participateID: {
		type: 'ObjectId'
	},
	// 签到
	chdekInID: {
		type: 'ObjectId'
	},
	// 我的访客
	myvisitorsID: {
		type: 'ObjectId'
	},
	// 今日浏览量
	browseday: {
		type: Number,
		default:0
	},
	// 总浏览量
	browsetotal: {
		type: Number,
		default:0
	},
	// 我的相册
	myalbumID: {
		type: 'ObjectId'
	},
	// 我的贴吧
	mytiebaID: {
		type: 'ObjectId'
	}

});

// 创建模型
// 相当于以stuSchema为原型，创建集合stus
var userModel = mongoose.model('user', userSchema,'user');

// 将模型向外暴露
module.exports = userModel;