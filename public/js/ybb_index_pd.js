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
		// $('.zhezc').click(function(e){
		// 	e.stopPropagation();
		// 	$(this).hide();
		// });
		$('.quxiaoxiao').click(function(){
			$('.zhezc').hide();
		})
	})

	//点击创建相册
	$('.anniuniu').click(function(){
		if($('.ceshi').text()==''){
			$('.xiangpianqu p').remove();
			$('.js-imgs').remove();
		}
		$('.xiangpianqu').prepend('<div class="js-imgs"><div class="js-img"><img src="/imgs/1.png"></div><p><span class="ceshi">相册：</span></p><div class="kaishib"><span></span>2017-06-05</div></div>');
		$('.js-imgs').css({
			width:'200px',
			height:'215px',
			marginTop:'30px',
			float:'left',
			marginLeft:'10px'
		});
		$('.js-img').css({
			width:'198px',
			height:'148px',
			background:'cyan',
			border:'1px solid #979797'
		});
		$('.js-img img').css({width:'100%',height:'100%'})
		$('.js-imgs>p').css({
			marginTop:'10px',
			fontSize: '18px',
			color: '#000000',
			textAlign:'left'
		});
		$('.ppp').css({float:'left'})
		var h = $('.xiagnnew').val();
		$('.js-imgs>p').append(h);
		$('.kaishib').css({width:'100%',height:'25px',marginTop:'5px',color:' #545454'});

		$('.kaishib span').text($('.textarea1').val());
	})
})