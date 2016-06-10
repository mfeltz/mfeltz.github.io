$( document ).ready(function() {

	//NAV SCROLLING
	var attachNavScroll = function(link, top) {
		$(link).click(function() {
			$('html, body').animate({scrollTop: top}, 600);
			return false;
		})
	};

	var section_1 = 0;
	var section_2 = 750;
	var section_3 = 1370;
	var section_4 = 1920;
	var section_5 = 2470;
	var section_6 = 2800;

	attachNavScroll('#home-nav', section_1);
	attachNavScroll('#about-nav', section_2);
	attachNavScroll('#work-nav', section_3);
	attachNavScroll('#projects-nav', section_4);
	attachNavScroll('#resumes-nav', section_5);
	attachNavScroll('#contact-nav', section_6);

	//MODAL
	var initializeModal = function() {
		var showOverlayClass = 'showOverlay';

		$('.project-bubble, .work-bubble').click(function() {
			$('#overlay').addClass(showOverlayClass);
		});

		$('#overlay').click(function(evt){
            if(evt.target.className === showOverlayClass) {
                $('#overlay').removeClass(showOverlayClass);
            }
        });
	};
	initializeModal();

});