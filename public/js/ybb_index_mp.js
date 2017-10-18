$(function(){
	// 选项卡开始
	$('.option ul li').click(function(){
		$('.haoyou').removeClass('haoyou');
		var index = $(this).index();
		$(this).children().addClass('haoyou');
		$('.xianshi').removeClass('xianshi');
		$('.Friends').eq(index).addClass('xianshi');
	});
	$('.AddTo button').click(function(){
			var index = $(this).parent().parent().index()-1;
			console.log(index)
			$(this).parent().hide();
			$('.zhichu').eq(index).show();
		})
})