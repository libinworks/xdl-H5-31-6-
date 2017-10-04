$(function(){
	//活动选项卡
	$('.activity ul li a').click(function(){
		$('.dsiplay-1').removeClass('dsiplay-1');
		$(this).addClass('dsiplay-1');
		var index = $(this).parent().index();
		$('.yingczang').removeClass('yingczang');
		$('.zhuye').eq(index).addClass('yingczang');
	})

})