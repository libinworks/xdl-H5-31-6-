$(function(){
	//选项卡开始
	$('.Opttab ul li').click(function(){
		$('.xuan').removeClass('xuan');
		$(this).children().addClass('xuan');
		var index = $(this).index();
		$('.xainshi').removeClass('xainshi');
		$('.ReplyMe').eq(index).addClass('xainshi');

	});
		$('.btnq button').eq(1).click(function(){
			$(this).hide();
			$(this).parent().prev().hide();
			$('.YesReply').show();
		})
		$('.btnq button').eq(2).click(function(){
			$(this).hide();
			$(this).parent().prev().hide();
			$('.PostTie').show();
		})
})