$(function(){
	$('#contentHeader>li').click(function(){
		$(this).addClass('contentHeader').siblings().removeClass('contentHeader');
		$('#contentFooter>li').eq($(this).index()).addClass('contentFooter').siblings().removeClass('contentFooter');
	})
})