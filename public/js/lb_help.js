$(function(){
	// 设置#question的高
	questionHeight();
	function questionHeight(){
		$('#question').css('height',$('.questionLeftShow').height()+160);
	}
	// 左侧选项卡
	$('#questionLeft>li').click(function(){
		$('.specificQues').removeClass('questionLeftShow');
		$(this).addClass('questionLeftBg').siblings().removeClass('questionLeftBg');
		$('.questionLeft').eq($(this).index()).addClass('questionLeftShow').siblings().removeClass('questionLeftShow');
		questionHeight();
	})
	// 分页
	$('#page>a').click(function(){
		$(this).addClass('pageBg').siblings().removeClass('pageBg');
	})
	$('#next').click(function(){
		var index = $('#page>a[class=pageBg]').index();
		$('#page>a').eq(index).addClass('pageBg').siblings().removeClass('pageBg');
	})
	$('#first').click(function(){
		$('#page>a').eq(0).addClass('pageBg').siblings().removeClass('pageBg');
	})
	$('#tail').click(function(){
		$('#page>a').eq(3).addClass('pageBg').siblings().removeClass('pageBg');
	})
	// 具体问题点击事件
	$('.questionLeft>li>a').click(function(){
		$('.questionLeft').removeClass('questionLeftShow');
		$('.specificQues').addClass('questionLeftShow');
		questionHeight();
	})
	$('.specificQues a').click(function(){
		$(this).parent().removeClass('questionLeftShow');
		$('.questionLeft').eq(0).addClass('questionLeftShow');
		$('#questionLeft>li').eq(0).addClass('questionLeftBg').siblings().removeClass('questionLeftBg');
		questionHeight();
	})
	// 在线客服
	$('#people').click(function(){
		$('#put').removeClass('put');
	})
	$('#off,#end').click(function(){
		$('#put').addClass('put');
	})
})