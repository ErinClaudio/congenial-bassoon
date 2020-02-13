 /*
  _____      						 _______ 	     
 |  __ \  							|_ _ _ _| _  	 	    
 | |__) | 					     _	   | |	 | |	        
 |  ___/    ___    __ _    __ _  | |    | |	 | |__     ___ 	 _ __  _ __    ___ 
 | |\ \    / _ \  / _` |  / _` | | |    | |	 | '_ \   / _ \ | '_ \| '_ \  / _ \
 | | \ \  |  __/ | (_| | | (_| | | |    | |	 | | | | |  __/ | |  ||  | | |  __/
 |_|  \ \  \___|  \__, |  \__,_| |_|    |_|   |_| |_|  \___| |_|  ||  |_|  \___|
                   __/ |              
                  |___/  		     
 ================================================================================ */
 (function($) {
     "use strict";

     /*
     MOBILE MENU
     ================================== */
     //  Main menu
     var MainLiDrop = $('.mainmenu li.dropdown,.mainmenu li.sub-dropdown');
	 var droPBtn = $('<div class="dropdown-btn"></div>');
     MainLiDrop.append(droPBtn);
     //Dropdown Button
     var MainLiDDbtn = $('.mainmenu li.dropdown .dropdown-btn');
     MainLiDDbtn.on('click', function() {
         $(this).toggleClass('submenu-icon');
         $(this).prev('ul').slideToggle(400);
		 return false;
     });
	 
     /*
     SEARCH BOX ACTIVE
     ================================== */
     var searchBoxI = $('.search-box i');
     var closeBox = $('#close');
	 if (searchBoxI.length) {
		 searchBoxI.on('click', function() {
			 $(this).parent().toggleClass('active-search');
			 return false;
		 });
	 }
	 
     /*
     STICKY
     ================================== */
     var AcSticky = $('.active-sticky');
     var WinD = $(window);
     WinD.on('scroll', function() {
         var scroll = $(window).scrollTop();
         var AESticky = AcSticky;
         if (scroll < 1) {
             AESticky.removeClass("is-sticky");
         } else {
             AESticky.addClass("is-sticky");
         }
		 return false;
    });
    var AcSticky2 = $('.active-sticky-2');
    var WinD = $(window);
    WinD.on('scroll', function() {
         var scroll = $(window).scrollTop();
         var AESticky2 = AcSticky2;
         if (scroll < 100) {
             AESticky2.removeClass("is-sticky");
         } else {
             AESticky2.addClass("is-sticky");
         }
		 return false;
    });
	 
     /*
	 Menu A Active Jquery
     ================================== */
	 var pgurl = window.location.href.substr(window.location.href
		.lastIndexOf("/")+1);
		var aActive = $('ul li a');
		aActive.each(function(){
		if($(this).attr("href") === pgurl || $(this).attr("href") === '' )
		$(this).addClass("active");
	 })
	
     /*
     ISOTOPE ACTIVE
     ================================ */
     // isotope menu
     var ProjMli = $('.portfolio-menu li');
     ProjMli.on('click', function() {
		 var ProjGrid = $('.portfolio-grid');
         ProjMli.removeClass("active");
         $(this).addClass("active");
         var selector = $(this).attr('data-filter');
         ProjGrid.isotope({
             filter: selector,
             animationOptions: {
                 duration: 750,
                 easing: 'linear',
                 queue: false
             }
         });
     });
	 
	/*
	VENOBOX ACTIVE
	================================ */
	var VenBOx = $('.venobox');
	VenBOx.venobox();
	var VenBOxv = $('.venoboxvid');
	VenBOxv.venobox();
	
     /*
     SLICK CAROUSEL AS NAV
     ===================================*/
     var slickFade = $('#slickFade');
     var OneITem = $('.one-item');
     var TesITem = $('.testimonial-item');
     slickFade.slick({
         dots: false,
         arrows: true,
		 fade: true,
		 autoplay: true,
		 speed: 1000,
         prevArrow: '<i class="prev zmdi zmdi-chevron-left"></i>',
         nextArrow: '<i class="next zmdi zmdi-chevron-right"></i>'
     });
     OneITem.slick({
         dots: false,
         arrows: true,
         prevArrow: '<i class="prev zmdi zmdi-chevron-left"></i>',
         nextArrow: '<i class="next zmdi zmdi-chevron-right"></i>'
     });
	TesITem.slick({
		 dots: false,
		 arrows: false,
		 autoplay: true,
		 autoplaySpeed: 4000
	});
	/*
	 CounterUp ACTIVE
	================================ */
	$('.counter').counterUp({
		delay: 50,
		time: 3000
	});
	
	/*
		YTPlayer ACTIVE CODE
	================================ */
	var bgVideo = $('#bgvideo');
	if ($.fn.mb_YTPlayer) {
		bgVideo.mb_YTPlayer();
	}

     /*
     CONTACT FORM VALIDATIONS SETTINGS
     ========================================*/
     var CTForm = $('#contact_form');
     CTForm.validate({
         onfocusout: false,
         onkeyup: false,
         rules: {
             name: "required",
             email: {
                 required: true,
                 email: true
             }
         },
         errorPlacement: function(error, element) {
             error.insertBefore(element);
         },
         messages: {
             name: "What's your name?",
             email: {
                 required: "What's your email?",
                 email: "Please, enter a valid email"
             }
         },
         highlight: function(element) {
             $(element)
                 .text('').addClass('error')
         },
         success: function(element) {
             element
                 .text('').addClass('valid')
         }
     });

     /*
     CONTACT FORM SCRIPT
     ========================================*/
     var CTSubmit = $('#contact_submit');
     CTForm.submit(function() {
         // submit the form
         if ($(this).valid()) {
             CTSubmit.button('loading');
             var action = $(this).attr('action');
             $.ajax({
                 url: action,
                 type: 'POST',
                 data: {
                     contactname: $('#contact_name').val(),
                     contactemail: $('#contact_email').val(),
                     contactmessage: $('#contact_message').val()
                 },
                 success: function() {
                     CTSubmit.button('reset');
                     CTSubmit.button('complete');
                 },
                 error: function() {
                     CTSubmit.button('reset');
                     CTSubmit.button('error');
                 }
             });
             // return false to prevent normal browser submit and page navigation 
         } else {
             CTSubmit.button('reset')
         }
         return false;
     });

     /*
     SCROLLUP
     ================================ */
     $.scrollUp({
         scrollText: '<i class="zmdi zmdi-long-arrow-up"></i>',
         easingType: 'linear',
         scrollSpeed: 500,
         animation: 'slide'
    });
	
     /*
     LOAD MORE JQUERY
     ================================== */
	var list1 = $(".more-load");
	var numToShow1 = 3;
	var button1 = $("#load-more-btn");
	var numInList1 = list1.length;
	
	list1.hide();
	if (numInList1 > numToShow1) {
		button1.show();
	}
	list1.slice(0, numToShow1).show();
	button1.on('click',function(){
		var showing1 = list1.filter(':visible').length;
		list1.slice(showing1 - 1, showing1 + numToShow1).fadeIn();
		var nowShowing1 = list1.filter(':visible').length;
		if (nowShowing1 >= numInList1) {
		button1.hide();
		}
		
		var MasCol = $('.portfolio-grid');
		MasCol.isotope('layout');
	});
	var PoMe_li = $('.portfolio-menu li:not(:first-child)');
	PoMe_li.on('click',function(){
		button1.hide();
	});
	
	/*
	SLIDER PARTICLES.JS
	================================== */
    if ( $('#particles-bg').length ) { 
        particlesJS("particles-bg", {
          "particles": {
            "number": {
              "value": 100,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#666666"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#666666",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 6,
              "direction": "none",
              "random": true,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 600
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "grab"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 250,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 600,
                "size": 80,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
        });
    }
	
 /*
 WINDOW LOAD FUNCTIONS
 ================================== */
    WinD.on('load', function() {
         // Preloader
         var preeLoad = $('#loading-wrap');
         preeLoad.fadeOut(1000);

         // isotope fitRows grid
         var IsoGriddoload = $('.fitRows-grid');
         IsoGriddoload.isotope({
             itemSelector: '.grid-item',
             // layout mode options
             layoutMode: 'fitRows'
         });
         // isotope masonry grid
         var IsoGriddoload = $('.masonry-grid');
         IsoGriddoload.isotope({
             itemSelector: '.grid-item',
             // layout mode options
             masonryHorizontal: {
                 rowHeight: 100
             }
         });
		 
     });


    // Scroll to Sections
    $('.navigation a').on('click', function() {
        $('html, body').animate({scrollTop: $(this.hash).offset().top - 50}, 800);
        return false;
    });


 })(jQuery);