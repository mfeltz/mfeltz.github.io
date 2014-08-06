$(document).ready(function(){

	window.onscroll = function(e){
		var doc = document.documentElement, body = document.body;
		var top = (doc && doc.scrollTop || body && body.scrollTop || 0);

		if(top > 140) {
			$('.scroll').fadeIn('slow');
		} else {
			$('.scroll').fadeOut('fast');
		}
	}

	//Scroll Down to sections
	$('.nav .link_home').click(function(){
		$("html, body").animate({scrollTop: 0}, 600);
		return false;
	});
	$('.nav .link_about').click(function(){
		$("html, body").animate({scrollTop: 390}, 600);
		return false;
	});
	$('.nav .link_work').click(function(){
		$("html, body").animate({scrollTop: 690}, 600);
		return false;
	});
	$('.nav .link_design').click(function(){
		$("html, body").animate({scrollTop: 990}, 600);
		return false;
	});
	$('.nav .link_contact').click(function(){
		$("html, body").animate({scrollTop: 1290}, 600);
		return false;
	});

});

