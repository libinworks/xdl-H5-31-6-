// 引入模块
var mongoose = require('../config/db_config');

//定义骨架Schema
var addSchema = new mongoose.Schema({
	addid:{
		type:'ObjectId',
		ref:'user'
	},
	// 我的好友
	addusers : {
		type:Array,
		default:[]
	}
});

//创建模型
var addModel = mongoose.model('adduser',addSchema,'adduser');
//console.log(addModel);
//将模型向外暴露
module.exports = addModel;