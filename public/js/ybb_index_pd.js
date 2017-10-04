$(function(){
	//活动选项卡
	$('.activity ul li a').click(function(){
		$('.dsiplay-1').removeClass('dsiplay-1');
		$(this).addClass('dsiplay-1');
		var index = $(this).parent().index();
		$('.yingczang').removeClass('yingczang');
		$('.zhuye').eq(index).addClass('yingczang');
	});

	//下拉框开始
	$('.xiajiantou').click(function(){
		$(this).children().children().toggleClass('icon-arrow-top');
		$('.xialakuagn').toggleClass('kuangzi');
	});
	$('.xialakuagn ul li').click(function(){
		var s = $(this).text();
		$('.newimgs span').text(s);
		$('.xialakuagn').toggleClass('kuangzi');
	});
	//点击出现遮罩层
	$('.newxiagnce').click(function(){
		var Wk = $(document).width();
		var Hk = $(document).height();
		//设置遮罩层的宽高
		$('.zhezc').height(Hk);
		$('.zhezc').width(Wk);
		$('.zhezc').show();
		var kk = $(window).width()/2;
		var sk = $(window).height()/2;
		var kuan = $('.clearInput').width()/2;
		$('.clearInput').css({
			left:kk-kuan,
			top:sk
		});
		$('.zhezc').click(function(e){
			e.stopPropagation();
			$(this).hide();
		});
		$('.quxiaoxiao').click(function(){
			$('.zhezc').hide();
		})
	})
})