
// 引入模块
var mongoose = require('../config/db_config');

// 骨架
var cateSchema = new mongoose.Schema({
 topics:{
		type:'ObjectId',
		ref:'user'
	},
	 content:{
		type:String,
		default: ''
	}

})
// 创建模型
// 相当于以stuSchema为原型，创建集合stus
var usModel = mongoose.model('cnode_cate', cateSchema);
// 将模型向外暴露
module.exports = usModel;