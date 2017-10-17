$(function(){
	// banner轮播定时器标记
	var timer;
	var i = 0;
	// 娱乐轮播图标记
	var timerEnjoy;
	var a = 0;
	var b = true;
	// 定义排行轮播的数组
	var timerRank;
	var c = 1;
	var d = 2;
	var ranks = [
		{'-webkit-transform': 'translateZ(0px)','transform': 'translateZ(0px)','-webkit-filter':'brightness(1)','filter':'brightness(1)','left':'300px','z-index':'3'},
		{'-webkit-transform': 'translateZ(-80px)','transform': 'translateZ(-80px)','-webkit-filter':'brightness(0.6)','filter':'brightness(0.6)','left':'640px','z-index':+c},
		{'-webkit-transform': 'translateZ(-80px)','transform': 'translateZ(-80px)','-webkit-filter':'brightness(0.6)','filter':'brightness(0.6)','left':'-40px','z-index':+d}
	]
	// 轮播图
	banner();
	bannerImg()
	function banner(){
		timer = setInterval(function(){
			i++;
			bannerImg();
		},4000)
	}
	function bannerImg(){
		if(i > 2){
			i = 0;
		}
		if(i < 0){
			i = 2;
		}
		$('.bannerImg').eq(i).addClass('bannerImgActive').siblings().removeClass('bannerImgActive');
		$('#circle>li').eq(i).addClass('circleActive').siblings().removeClass('circleActive');
	}
	// 箭头显示与隐藏
	$('#banner').mouseover(function(){
		$('#left,#right').css({'opacity':1});
		clearInterval(timer);
	}).mouseout(function(){
		$('#left,#right').css({'opacity':0})
		banner();
	})
	// 圆点
	$('#circle>li').mouseover(function(){
		i = $(this).index();
		bannerImg();
	})
	// 左右箭头
	$('#left').click(function(){
		i--;
		bannerImg();
		console.log(i)
	})
	$('#right').click(function(){
		i++;
		bannerImg();
	})
	// 柏岁娱乐·展风采滚动轮播
	function enjoy(){
		var j = $('#entertainment>li').length;
		if(j < 5){
			return;
		}
		timerEnjoy = setInterval(function(){
			if(b){
				a -= 2;
				if(a <= -(256*j+25*(j-1)-1100)){
					b = false;
				}
			}else{
				a += 2;
				if(a >= 0){
					b = true;
				}
			}
			$('#entertainment').css('left',a);
			
		},100)
	}
	enjoy();
	$('#entertainment').mouseover(function(){
		clearInterval(timerEnjoy);
	}).mouseout(function(){
		enjoy();
	})
	// 排行轮播图
	rank();
	function rank(){
		for(var i = 0;i < ranks.length;i++){
			var data = ranks[i];
            $('#rank>li').eq(i).css(data);
            $('#rank>li').eq(i).stop().animate(data,600);
		}
	}
	// 右箭头
	$('#rankRight').click(function () {
        var first = ranks.shift();
        ranks.push(first);
        rank();
        // console.log($.inArray(0, rankT))
    })
    // 左箭头
    function prev(){
        var last = ranks.pop();
        ranks.unshift(last);
        rank();
    }
    $('#rankLeft').click(function(){
    	prev();
    });
    timerRank = setInterval(function(){
        prev();
    },4000);
    $('#rank,#rankLeft,#rankRight').mouseover(function(){
    	clearInterval(timerRank);
    }).mouseout(function(){
    	timerRank = setInterval(function(){
	        prev();
	    },4000);
    })
    $('#rankRight').mouseover(function(){
		c = 2;
		d = 1;
		ranks = [
			{'-webkit-transform': 'translateZ(0px)','transform': 'translateZ(0px)','-webkit-filter':'brightness(1)','filter':'brightness(1)','left':'300px','z-index':'3'},
			{'-webkit-transform': 'translateZ(-80px)','transform': 'translateZ(-80px)','-webkit-filter':'brightness(0.6)','filter':'brightness(0.6)','left':'640px','z-index':+c},
			{'-webkit-transform': 'translateZ(-80px)','transform': 'translateZ(-80px)','-webkit-filter':'brightness(0.6)','filter':'brightness(0.6)','left':'-40px','z-index':+d}
		]
		rank();
    }).mouseout(function(){
    	c = 1;
		d = 2;
		ranks = [
			{'-webkit-transform': 'translateZ(0px)','transform': 'translateZ(0px)','-webkit-filter':'brightness(1)','filter':'brightness(1)','left':'300px','z-index':'3'},
			{'-webkit-transform': 'translateZ(-80px)','transform': 'translateZ(-80px)','-webkit-filter':'brightness(0.6)','filter':'brightness(0.6)','left':'640px','z-index':+c},
			{'-webkit-transform': 'translateZ(-80px)','transform': 'translateZ(-80px)','-webkit-filter':'brightness(0.6)','filter':'brightness(0.6)','left':'-40px','z-index':+d}
		]
		// rank();
    })
    // 返回顶部
    $('#returnTop').click(function () {
        $('html,body').animate({scrollTop:0},400);
    });
    // 楼层
    $('#concrete').offset().left;
    $('#floor').css('left',$('#concrete').offset().left-120);
    $("#floor li").click(function () {
    	var index = $(this).index();
    	var backtop = $('.plate').eq(index).position().top+50;
		$('html,body').animate({scrollTop:backtop},800);
	});
	$("#floor li").mouseover(function(){
		$(this).css('background-color','#BAE0F6').siblings().css('background-color','transparent');
		$(this).children().addClass('floorCircle2');
		$('#floor>li>div>span').css('opacity','0');
		$(this).children().children().css('opacity','1');
	}).mouseout(function(){
		$(this).css('background-color','transparent');
		$(this).children().removeClass('floorCircle2');
		$(this).children().children().css('opacity','0');
		goTop();
	});
	goTop();
    window.onscroll = function () {
    	goTop();
    }
    function goTop(){
    	var start = $('#concrete .plate').eq(0).position().top-$(window).scrollTop();
    	if(start <= 0){
    		$('#floor').css('opacity','1');
    	}else{
    		$('#floor').css('opacity','0');
    	}
    	for(var i=0;i < $('.plate').length;i++){
    		var backtop = $('.plate').eq(i).position().top-$(window).scrollTop();
    		if(backtop <= 0){
    			$('#floor>li>div').eq(i).addClass('floorCircle1');
    			$('#floor>li>div').eq(i).parent().css('background-color','#BAE0F6').siblings().css('background-color','transparent');
    			$('#floor>li>div>span').css('opacity','0');
    			$('#floor>li>div').eq(i).children().css('opacity','1');
    		}else{
    			$('#floor>li>div').eq(i).removeClass('floorCircle1');
    		}
    	}
    }

})