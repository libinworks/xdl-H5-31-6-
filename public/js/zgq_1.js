// 娱乐轮播图标记
	var timerEnjoy;
	var a = 0;
	var b = true;

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