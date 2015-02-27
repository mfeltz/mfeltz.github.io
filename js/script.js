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
	$('.icon_nav .link_home').click(function(){
		$("html, body").animate({scrollTop: 0}, 600);
		return false;
	});
	$('.nav .link_home').click(function(){
		$("html, body").animate({scrollTop: 0}, 600);
		return false;
	});
	$('.nav .link_about').click(function(){
		$("html, body").animate({scrollTop: 525}, 600);
		return false;
	});
	$('.nav .link_work').click(function(){
		$("html, body").animate({scrollTop: 1085}, 600);
		return false;
	});
	$('.nav .link_projects').click(function(){
		$("html, body").animate({scrollTop: 1645}, 600);
		return false;
	});
	$('.nav .link_contact').click(function(){
		$("html, body").animate({scrollTop: 2205}, 600);
		return false;
	}); 

	//GENERAL FOR JOBS
	$(".job").on("mouseenter", function(){
		$(".default").hide();
	}).on("mouseleave", function() {
		$(".default").show();
	});

	//IBM
	$(".IBM").on("mouseenter", function(){
		$(".IBM_info").show();
	}).on("mouseleave", function() {
		$(".IBM_info").hide();
	});
	//TSR
	$(".TSR").on("mouseenter", function(){
		$(".TSR_info").show();
	}).on("mouseleave", function() {
		$(".TSR_info").hide();
	});

});

