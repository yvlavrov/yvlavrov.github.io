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
  	arrows: false
  });
});
/*
  $('.item-slider').slick({
  	autoplay: false,
  	infinite: false,
  	speed: 600,
  	slidesToShow: 8,
  	slidesToScroll: 6,
  	slidesPerRow: 1,
  	nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
  });
});
*/

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