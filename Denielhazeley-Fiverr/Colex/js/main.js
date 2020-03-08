
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
    if (!window.homePosition) window.homePosition = $('#header').offset().top;
	var currentOffsetPosition = $(window).scrollTop();
    
	if (currentOffsetPosition > window.homePosition) {
		$('#header').addClass('sticky');
	} else {
		$('#header').removeClass('sticky');
	}
}






// SEARCH BUTTON
const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

const expand = () => {
  searchBtn.classList.toggle("close");
  input.classList.toggle("square");
};

searchBtn.addEventListener("click", expand);


