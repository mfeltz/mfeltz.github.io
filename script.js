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
		$("html, body").animate({scrollTop: 500}, 600);
		return false;
	});
	$('.nav .link_work').click(function(){
		$("html, body").animate({scrollTop: 880}, 600);
		return false;
	});
	$('.nav .link_design').click(function(){
		$("html, body").animate({scrollTop: 1600}, 600);
		return false;
	});
	$('.nav .link_contact').click(function(){
		$("html, body").animate({scrollTop: 2050}, 600);
		return false;
	});

});

<script type="text/javascript">
		marqueeInit({
			uniqueid: 'photos',
			style: {
				'padding': '0px',
				'width': '100%',
				'height': '175px'
			},
	inc: 1, //speed - pixel increment for each iteration of this marquee's movement
	mouse: 'false', //mouseover behavior ('pause' 'cursor driven' or false)
	moveatleast: 2,
	neutral: 150,
	direction: 'right',
	savedirection: true
});
