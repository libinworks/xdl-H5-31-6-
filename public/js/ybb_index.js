$(function(){
	//资料卡效果开始
	//获取每一个li
	var lis = $('.data ul li');
	$(lis).click(function(){
		$('.cyans').removeClass('cyans');
		$(this).addClass('cyans');
	});

	//定义三级联动的数组
	var oneArr = [
		'北京市',
		'河北省',
		'山西省'
	];
	var toArr = [
		['昌平区','朝阳区','海淀区'],
		['邯郸市','石家庄市','邢台市'],
		['太原市','大同市','晋中市']
	];
	var ThreArr = [
		[
			['回龙观镇','北七家'],
			['国贸'],
			['海淀黄庄']
		],
		[
			['鸡泽县','永年县'],
			['石家庄一区'],
			['邢台县']
		],
		[
			['太原一区'],
			['大同一区'],
			['和顺县']
		]
	];

	//遍历一级数组
	//定义空数组接收值
	var one = document.getElementById('one');
	var two = document.getElementById('two');
	var three = document.getElementById('three');
	one.length = oneArr.length;
	for(var i=0;i<oneArr.length;i++){
			one.options[i].text = oneArr[i];
		}

	one.onchange=function(){
		var index = this.selectedIndex ;
		for(var i=0;i<toArr[index].length;i++){
			two.length = toArr[index].length;
			two.options[i].text = toArr[index][i];
		}
		two.onchange=function(){
			var indexs = this.selectedIndex ;
			for(var i=0;i<ThreArr[index][indexs].length;i++){
				three.length = ThreArr[index][indexs].length;
				three.options[i].text = ThreArr[index][indexs][i];
			}
		};
	};

})