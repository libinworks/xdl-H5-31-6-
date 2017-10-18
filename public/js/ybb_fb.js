$(function(){
	var istxt = false;
	var textarea = $('.textarea').val().trim();

	if(textarea == '' ){
		istxt = true;
	}else{
		istxt = false;
	}

	$('#docre').submit(function(event) {
		if(!istxt){
			return false;
		}
	});
})


