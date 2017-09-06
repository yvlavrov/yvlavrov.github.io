$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

$(document).ready(function(){
  $('.slider').slick({
  	autoplay: true,
  	fade: true,
  	arrows: false,
  	dots: true,
  	appendDots: $('.slider__dots')
  });
});

$(document).ready(function(){
  $('.item-slider').slick({
  	autoplay: false,
  	infinite: false,
  	speed: 600,
  	slidesToShow: 6,
  	slidesToScroll: 4,
  	slidesPerRow: 1,
  	nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    responsive: [
    {
      breakpoint: 1314,
      settings: {
	  slidesToShow: 5,
	  slidesToScroll: 4,
	  slidesPerRow: 1,
      }
    },
    {
      breakpoint: 1136,
      settings: {
	  slidesToShow: 4,
	  slidesToScroll: 3,
	  slidesPerRow: 1,
      }
    },
     {
      breakpoint: 991,
      settings: {
	  slidesToShow: 5,
	  slidesToScroll: 4,
	  slidesPerRow: 1,
      }
    },
    {
      breakpoint: 905,
      settings: {
      slidesToShow: 4,
	  slidesToScroll: 3,
	  slidesPerRow: 1,
      }
    }, 
    {
      breakpoint: 726,
      settings: {
      slidesToShow: 3,
	  slidesToScroll: 2,
	  slidesPerRow: 1,
       }
    },
     {
      breakpoint: 549,
      settings: {
      slidesToShow: 2,
	  slidesToScroll: 2,
	  slidesPerRow: 1,
       }
    },
     {
      breakpoint: 370,
      settings: {
      slidesToShow: 2,
	  slidesToScroll: 2,
	  slidesPerRow: 1,
       }
    }
  ]
  });
});


/*скрытие-открытие dropDownMenu*/

one.onmouseover = function(){two.style.display = 'block'}; 
two.onmouseover = function(){two.style.display = 'block'}; 
two.onmouseout = function(){two.style.display = 'none'};


$(function() {
  $('#my-menu').mmenu({
    extensions: ["border-none", "fx-menu-slide", "shadow-page", "theme-white"],
    navbar: {
      title: '<span></span>',
    },
  });
});
$(function() {
  $('#my-menu-2').mmenu({
    extensions: ["border-none", "fx-menu-slide", "shadow-page", "theme-white"],
    navbar: {
      title: '<span></span>',
    },
  });
});