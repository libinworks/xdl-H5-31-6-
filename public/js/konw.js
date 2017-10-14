// 此刻时间
	var now = new Date();

	// 定义活动开始的时间
	var startTime = new Date(now.getTime() + 1000*60*10);	// 此刻开始的3小时
	console.log(startTime);

	// 获取元素
	var hour = document.getElementById('hour');
	var minute = document.getElementById('minute');
	var second = document.getElementById('second');
	// 定义设置倒计时时间的函数
	function setTime(){
		// 当前时间
		var now = new Date();
		// 两个时间对象之间的差值
		var timeCha = startTime.getTime() - now.getTime();
		// 判断时间的差值
		if(timeCha<=0){			
			// 设置时间已经为0
			hour.innerHTML = '00';
			minute.innerHTML = '00';
			second.innerHTML = '00';
			// 终止程序进行
			return;
		}
		// 小时 差值
		var timeHour = Math.floor(timeCha/1000/60/60);
		// 赋值小时
		hour.innerHTML = zeroFill(timeHour);
		// 分钟
		timeCha = timeCha - timeHour*60*60*1000		
		var timeMinute = Math.floor(timeCha/1000/60);
		// 赋值分钟
		minute.innerHTML = zeroFill(timeMinute);
		// 秒
		timeCha = timeCha - timeMinute*60*1000;
		var timeSecond = Math.floor(timeCha/1000);
		// 赋值秒
		second.innerHTML = zeroFill(timeSecond);
	}
	// 页面进入时调用函数
	setTime();

	// 时间差值
	var timeCha = startTime.getTime() - now.getTime();
	if(timeCha>0){
		// 定时器
		setInterval(function(){
			// 调用函数
			setTime()
		},1000);
	}
	function zeroFill(num){
		if(num<10){
			num = '0'+num;
		}
			return num;
	}

	//  节点操作
 // 添加节点
 $('.answer>p>span').on('click',function(){
 	var san = $(this).html();
 	 $('.sss>span').html(san);
 })