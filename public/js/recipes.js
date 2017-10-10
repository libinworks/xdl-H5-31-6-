$(function () {
    var offOn = true;
    var spot = $('.collection');
    spot.on('click', function () {
    	var index = $(this).parent().parent().parent().parent().index();
    	// alert(index)
        if (spot.offOn) {
            spot.eq(index).html('收藏');
            spot.offOn = false;
        } else {
            spot.eq(index).html('已收藏');
            spot.offOn = true;
        }
    })
})