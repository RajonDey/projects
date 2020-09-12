var windowWidth = window.innerWidth;

/*
  FAQ JS 
  ....................................
*/
$(function() {
"use strict";
    
    $('#faq div.a').hide();
    $('#team .moretext').hide();

    // -- QAs
    $(document).on('click', '.q', function(e) {
        let x = $(this);
      x.next('div.a').slideToggle(300);
      x.find('i').toggleClass('fa-angle-down fa-angle-up');
      e.preventDefault();
    });

});


/*
    SIDE BAR MENU
  ....................................
*/
$(function() {
    "use strict";
    addEventListener("touchstart", function() {}, !0);
    for (var t = document.querySelectorAll(".c-hamburger"), e = t.length - 1; e >= 0; e--) {
        i(t[e])
    }

    function i(t) {
        t.addEventListener("click", function(t) {
            t.preventDefault(), !0 === this.classList.contains("is-active") ? (this.classList.remove("is-active"), $(".open").removeClass("oppenned")) : (this.classList.add("is-active"), $(".open").addClass("oppenned"))
        })
    }
    $(".sub-menu li a").click(function(t) {
        $(".open").removeClass("oppenned"), $(".c-hamburger").removeClass("is-active")
    }), $(".openImageDialog").click(function(t) {
        var e = $(this).data("id"),
            i = $(this).data("title");
        $("#videoAmbassadorTitle").text(i), $("#videoAmbassador .modal-body iframe").attr("src", e)
    }), $(".openPromoDialog").click(function(t) {
        var e = $(this).data("id"),
            i = $(this).data("title");
        $("#videoPromoTitle").text(i), $("#videoPromo .modal-body iframe").attr("src", e)
    }), $(".openCopyDialog").click(function(t) {
        var e = $(this).data("title"),
            i = $(this).data("copy");
        $("#dtCopyTitle").text(e), $("#dtCopy .modal-body").html(i)
    }), $(".close").click(function(t) {
        t.preventDefault(), $(".embed-responsive").children("iframe").attr("src", "")
    })
});



// Elements
var navbar = document.querySelector('#navbar');
var mainTitleLetters = document.querySelectorAll('#header-main-text .letter');
var secondTitleLetters = document.querySelectorAll('#latest-merchandise .effect-text .letter');
var thirdTitleLetters = document.querySelectorAll('#exclusive-content .effect-text .letter');
var fourthTitleLetters = document.querySelectorAll('#x-flux .effect-text .letter');
var fifthTitleLetters = document.querySelectorAll('#faq-title .effect-text .letter');
var sixthTitleLetters = document.querySelectorAll('#more-explore .effect-text .letter');


// var client3 = document.querySelector('#client-3');
// var client3Info = document.querySelector('#client-3 .info');
// var client4 = document.querySelector('#client-4');
var hidden3 = document.querySelector('#hidden3');
var hidden4 = document.querySelector('#hidden4');
var hidden5 = document.querySelector('#hidden5');
var hidden6 = document.querySelector('#hidden6');
var hidden7 = document.querySelector('#hidden7');
var contactForm = document.querySelector('#hidden8');
var hidden9 = document.querySelector('#hidden9');
var hidden10 = document.querySelector('#hidden10');
var hidden11 = document.querySelector('#hidden11');
var hidden12 = document.querySelector('#hidden12');
var mainTopicsContainer = document.querySelector('#main-topics');
var mainTopics = document.querySelectorAll('#main-topics .topic');
var footerTopicsContainer = document.querySelector('#footer-topics');
var footerTopics = document.querySelectorAll('#footer-topics .topic');
var clients = document.querySelectorAll('.client');
var videoPopup = document.querySelector('#video-popup');
var videoPopupClose = document.querySelector('#video-popup-close');
var watchVideo = document.querySelector('#watch-video');
var mainVideo = document.querySelector('#main-video');
var formButton = document.querySelector('#form-button');

// iOS video fix
var isIOS = /iPad|iPhone|iPod/.test(navigator.platform);

if (isIOS) {
  var canvasVideo = new CanvasVideoPlayer({
    videoSelector: '#video-element',
    canvasSelector: '#video-canvas',
    timelineSelector: false,
    autoplay: true,
    makeLoop: true,
    pauseOnClick: false,
    audio: false,
  });
} else {
  // Use HTML5 video
  document.querySelector('#video-canvas').style.display = 'none';
}

// Function to check if an element is visible
function checkVisible(elm, threshold, mode) {
  threshold = threshold || 0;
  mode = mode || 'visible';

  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
  );
  var above = rect.bottom - threshold < 0;
  var below = rect.top - viewHeight + threshold >= 0;

  return mode === 'above' ? above : mode === 'below' ? below : !above && !below;
}

// Change navbar color on scroll
function changeNavbarColor() {
  if (
    document.body.scrollTop >= 100 ||
    document.documentElement.scrollTop >= 100
  ) {
    navbar.classList.add('white');
  } else {
    navbar.classList.remove('white');
  }
}
changeNavbarColor();

window.onscroll = function () {
  changeNavbarColor();

  // Show topics
  if (windowWidth >= 1348) {
    if (checkVisible(mainTopicsContainer)) {
      mainTopics.forEach(function (topic, i) {
        setTimeout(function () {
          topic.classList.add('visible');
        }, i * 75);
      });
    } else {
      mainTopics.forEach(function (topic, i) {
        setTimeout(function () {
          topic.classList.remove('visible');
        }, i * 75);
      });
    }

    if (checkVisible(footerTopicsContainer)) {
      footerTopics.forEach(function (topic, i) {
        setTimeout(function () {
          topic.classList.add('visible');
        }, i * 75);
      });
    } else {
      footerTopics.forEach(function (topic, i) {
        setTimeout(function () {
          topic.classList.remove('visible');
        }, i * 75);
      });
    }
  } else {
    mainTopics.forEach(function (topic) {
      if (checkVisible(topic)) {
        topic.classList.add('visible');
      } else {
        topic.classList.remove('visible');
      }
    });

    footerTopics.forEach(function (topic) {
      if (checkVisible(topic)) {
        topic.classList.add('visible');
      } else {
        topic.classList.remove('visible');
      }
    });
  }

  clients.forEach(function (client) {
    if (checkVisible(client)) {
      client.classList.add('visible');
    } else {
      client.classList.remove('visible');
    }
  });

  // Hidden elements
  if (checkVisible(hidden3)) {
    hidden3.classList.add('visible');
  } else {
    hidden3.classList.remove('visible');
  }

  if (checkVisible(hidden4)) {
    hidden4.classList.add('visible');
  } else {
    hidden4.classList.remove('visible');
  }

  if (checkVisible(hidden5)) {
    hidden5.classList.add('visible');
  } else {
    hidden5.classList.remove('visible');
  }

  if (checkVisible(hidden6)) {
    hidden6.classList.add('visible');
  } else {
    hidden6.classList.remove('visible');
  }

  if (checkVisible(hidden7)) {
    hidden7.classList.add('visible');
  } else {
    hidden7.classList.remove('visible');
  }

  if (checkVisible(contactForm)) {
    contactForm.classList.add('visible');
  } else {
    contactForm.classList.remove('visible');
  }

  if (checkVisible(hidden9)) {
    hidden9.classList.add('visible');
  } else {
    hidden9.classList.remove('visible');
  }

  if (checkVisible(hidden10)) {
    hidden10.classList.add('visible');
  } else {
    hidden10.classList.remove('visible');
  }

  if (checkVisible(hidden11)) {
    hidden11.classList.add('visible');
  } else {
    hidden11.classList.remove('visible');
  }

  if (checkVisible(hidden12)) {
    hidden12.classList.add('visible');
  } else {
    hidden12.classList.remove('visible');
  }
};

// function moveClient3Info() {
//   if (windowWidth >= 768) {
//     client3Info.classList.add('special-info');
//     client4.prepend(client3Info);
//   } else if (windowWidth <= 768) {
//     client3Info.classList.remove('special-info');
//     client3.append(client3Info);
//   }
// }
// moveClient3Info();

window.onresize = function () {
  windowWidth = window.innerWidth;
  moveClient3Info();
};

// Main title effect
mainTitleLetters.forEach(function (letter, i) {
  setTimeout(function () {
    letter.classList.add('visible');
  }, i * 120);
});

setTimeout(function () {
  secondTitleLetters.forEach(function (letter, i) {
    setTimeout(function () {
      letter.classList.add('visible');
    }, i * 120);
  });
}, 4500);


setTimeout(function () {
  thirdTitleLetters.forEach(function (letter, i) {
    setTimeout(function () {
      letter.classList.add('visible');
    }, i * 120);
  });
}, 4500);

setTimeout(function () {
  fourthTitleLetters.forEach(function (letter, i) {
    setTimeout(function () {
      letter.classList.add('visible');
    }, i * 120);
  });
}, 4500);

setTimeout(function () {
  fifthTitleLetters.forEach(function (letter, i) {
    setTimeout(function () {
      letter.classList.add('visible');
    }, i * 120);
  });
}, 4500);

setTimeout(function () {
  sixthTitleLetters.forEach(function (letter, i) {
    setTimeout(function () {
      letter.classList.add('visible');
    }, i * 120);
  });
}, 4500);


// Watch video popup
watchVideo.addEventListener('click', function () {
  videoPopup.classList.add('visible');
  mainVideo.play();
});

videoPopup.addEventListener('click', function (e) {
  if (e.target != mainVideo) {
    videoPopup.classList.remove('visible');
    mainVideo.pause();
    setTimeout(function () {
      mainVideo.currentTime = 0;
    }, 350);
  }
});

videoPopupClose.addEventListener('click', function (e) {
  videoPopup.classList.remove('visible');
  mainVideo.pause();
  setTimeout(function () {
    mainVideo.currentTime = 0;
  }, 350);
});

// Form Button
formButton.addEventListener('click', function (e) {
  var form = contactForm;

  // Success and Error functions for after the form is submitted
  function success() {
    form.reset();
    formButton.classList.add('sent');
    formButton.innerHTML =
      'Message sent successfully! <i class="fas fa-check"></i>';

    setTimeout(function () {
      formButton.classList.remove('sent');
      formButton.innerHTML = 'Send message <i class="fas fa-paper-plane"></i>';
    }, 3000);
  }

  function error() {
    alert('An error occurred. Please try again.');
  }

  // handle the form submission event
  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });

  // helper function for sending an AJAX request
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
});




