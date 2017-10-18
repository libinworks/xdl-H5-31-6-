/**
* 定义计算时间差的函数 setTime()
* @param number time 输入的时间
* @param string timeStr 返回的时间差值字符串 
*/
function setTime(time){
	// 当前时间
	var now = new Date();

	// 判断差值，转为秒数
	var cha = now - time;

	// 定义字符串，接收结果
	var timeStr = '';

	// 范围
	if(cha/1000<3){
		timeStr = ' 刚刚';
	}else if(cha/1000<8){
		timeStr = ' 几秒前';
	}else if(cha/1000<60){
		// 获取秒
		var second = Math.floor(cha/1000);
		timeStr = second+' 秒前'
	}else if(cha/1000/60<60){
		var minute = Math.floor(cha/1000/60%60);
		timeStr = minute+' 分钟前';
	}else if(cha/1000/60/60<24){
		var hour = Math.floor(cha/1000/60/60%24);
		timeStr = hour+' 小时前';
	}else if(cha/1000/60/60/24<30){
		var day = Math.floor(cha/1000/60/60/24%30);
		timeStr = day+' 天前'
	}else if(cha/1000/60/60/24/30<12){
		var month = Math.floor(cha/1000/60/60/24/30%12);
		timeStr = month+' 个月前';
	}else{
		var year = Math.floor(cha/1000/60/60/24/365);
		timeStr = year+' 年前';
	}

	// 返回结果
	return timeStr;
}

module.exports = setTime;