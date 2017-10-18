var lun = document.getElementById('lun');
var lis = lun.children[0].children;
var listCircle = document.getElementById('list-circle');
var lists = listCircle.children[0].children;
var left = document.getElementById('left');
var right = document.getElementById('right');
var index = 0;
var len = lis.length;
var run;
function autoRun(){
	run = setInterval(function(){
		lis[index].removeAttribute('class'); 
		lists[index].removeAttribute('class');
		index++;
		if(index==5){
			index = 0;
		}
		lis[index].setAttribute('class','active');
		lists[index].setAttribute('class','list-active');
	},2000)
}
autoRun();
lun.onmouseover = function(){
	clearInterval(run);
}
lun.onmouseout = function(){
	autoRun();
}
for(var i=0;i<lists.length;i++){
	lists[i].onmouseover = (function(i){
		return function(){
			lis[index].removeAttribute('class');
			lists[index].removeAttribute('class');
			index = i; 
			lis[index].setAttribute('class','active');
			lists[index].setAttribute('class','list-active');
		}
	})(i)
	lists[i].onmouseout = function(){
	}
}
