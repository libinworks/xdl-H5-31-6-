// index.js 和 routes/index.js是对应的

// 定义对象
var index = {};

// 定义首页方法
index.index = function(req, res) {
	/*
		req 请求
		res 响应
	*/ 

	// 响应模板
	res.render('index')
}

// 向外导出
module.exports = index;