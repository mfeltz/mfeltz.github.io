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
		$("html, body").animate({scrollTop: 100}, 600);
		return false;
	});
	$('.nav .link_work').click(function(){
		$("html, body").animate({scrollTop: 200}, 600);
		return false;
	});
	$('.nav .link_design').click(function(){
		$("html, body").animate({scrollTop: 300}, 600);
		return false;
	});
	$('.nav .link_contact').click(function(){
		$("html, body").animate({scrollTop: 400}, 600);
		return false;
	});

});

