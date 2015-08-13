$( document ).ready(function() {

	//NAV SCROLLING
	var attachNavScroll = function(link, top) {
		$(link).click(function() {
			$('html, body').animate({scrollTop: top}, 600);
			return false;
		})
	};

	attachNavScroll('#home-nav', 0);
	attachNavScroll('#about-nav', 600);
	attachNavScroll('#work-nav', 1200);
	attachNavScroll('#projects-nav', 1800);
	attachNavScroll('#resumes-nav', 2400);
	attachNavScroll('#contact-nav', 2800);

	//MODAL
	var initializeModal = function() {
		var showOverlayClass = 'showOverlay';

		$('.work-bubble').click(function() {
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