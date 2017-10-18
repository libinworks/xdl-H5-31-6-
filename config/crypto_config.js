// 引入系统模块
var crypto = require('crypto');

function cryptoStr(inputStr) {
	
	var sha1 = crypto.createHash('sha1');
	// console.log(inputStr);
	var outputStr = sha1.update(inputStr).digest('hex');

	// 返回结果
	return outputStr;
}

// 将加密字符串的函数向外导出
module.exports = cryptoStr;