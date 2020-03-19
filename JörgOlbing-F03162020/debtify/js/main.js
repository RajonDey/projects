
/*
  ....................................
        Main JS Codes are there 
  ....................................
*/


// STICKY NAVBAR
// ON WINDOW SCROLL
$(window).scroll(function(){
	stickyHeaderHandler();
});

function stickyHeaderHandler() {
    if (!window.homePosition) window.homePosition = $('#navbar').offset().top;
	var currentOffsetPosition = $(window).scrollTop();
    
	if (currentOffsetPosition > window.homePosition) {
		$('#navbar').addClass('sticky');
	} else {
		$('#navbar').removeClass('sticky');
	}
}



