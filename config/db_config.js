// 数据库的配置文件

// 引入模块
var mongoose = require('mongoose');

// 定义数据库连接地址
var dbUrl = 'mongodb://baisui:baisui@localhost:27017/baisui';
// 建立连接
mongoose.connect(dbUrl, {
	useMongoClient: true
}, function(err) {

	//判断是否连接成功
	if (err){
		console.log('数据库连接失败了...');
		// 终止程序
		return;
	}
})

// 将当前的mongoose对象，向外暴露
module.exports = mongoose;