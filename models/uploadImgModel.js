
// 引入模块
var mongoose = require('../config/db_config')

// 创建骨架 Schema
var imgSchema = new mongoose.Schema({
	// 用户名
	user: {
		type: 'ObjectId',
		ref: 'user'
	},
	// 创建时间
	uploadImgTime: {
		type: Date,
		default: Date.now
	},
	upImg:{

	}
});
// 创建模型
var uploadImgModel = mongoose.model('uploadImg', imgSchema,'uploadImg');

// 将模型向外暴露
module.exports = uploadImgModel;