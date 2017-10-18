$(function(){
	//选项卡开始
	$('.Opttab ul li').click(function(){
		$('.xuan').removeClass('xuan');
		$(this).children().addClass('xuan');
		var index = $(this).index();
		$('.xainshi').removeClass('xainshi');
		$('.ReplyMe').eq(index).addClass('xainshi');

	});
	$('.btnq button').eq(0).click(function(){
			$(this).hide();
			$(this).parent().prev().hide();
			$('.YesReply').eq(0).show();
			$('.YesReply').eq(0).children('.kasihiud').show();
		})

		$('.btnq button').eq(1).click(function(){
			$(this).hide();
			$(this).parent().prev().hide();
			$('.YesReply').eq(1).show();
			$('.YesReply').eq(1).children('.kasihiud').show();

		})
		$('.btnq button').eq(2).click(function(){
			$(this).hide();
			$(this).parent().prev().hide();
			$('.PostTie').show();
		})
})