
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

// FOR TOGGLE MENU
function classToggle() {
  const navs = document.querySelectorAll('.Navbar__Items')
  
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.Navbar__Link-toggle')
  .addEventListener('click', classToggle);


