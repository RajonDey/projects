
/*
  ....................................
        Main JS Codes are there 
  ....................................
*/



/*
    STICKY NAVBAR CODES HERE
  ....................................
*/
(function($){

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("sticky-navbar").style.top = "0";
      document.getElementById("sticky-navbar").classList.remove("sticky-hide");
    } else {
      document.getElementById("sticky-navbar").style.top = "-55px";
      document.getElementById("sticky-navbar").classList.add("sticky-hide");;
    }
    prevScrollpos = currentScrollPos;
  }

  $(function(){
    $(window).scroll(function(e) {
      if($(this).scrollTop()>300){
      	document.getElementById("sticky-navbar").style.display = "block";
      }
      else{
      	document.getElementById("sticky-navbar").style.display = "none";

      }
    });
  });

})(jQuery);

/*
    SMOOTH SCROLLING CODES HERE
  ....................................
*/
(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 0)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

})(jQuery);





