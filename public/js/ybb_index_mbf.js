$(function(){
	// 选项卡开始
	$('.option ul li').click(function(){
		$('.haoyou').removeClass('haoyou');
		var index = $(this).index();
		$(this).children().addClass('haoyou');
		$('.xianshi').removeClass('xianshi');
		$('.Friends').eq(index).addClass('xianshi');
		$('.AddTo button').click(function(){
			$(this).parent().hide();
			$('.Shadowresults').show();
		})
	});
})