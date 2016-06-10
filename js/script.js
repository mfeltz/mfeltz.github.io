$( document ).ready(function() {
	$('#work-detail-container, #project-detail-container').hide();

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


	//BUBBLE VARIABLES

		//WORK

		//FITBIT
		var fitbit = {
			title: 'Software Engineering Intern',
			date: 'Summer 2015',
			url: 'fitbit.com',
			desc: 'Worked on the Device Cornerstone team. Front-end focused, working on various bug fixes, as well as creating my own user interface for daily stats.'}

		var ibm ={
			title: 'Software Engineering Intern',
			date: 'Summer 2014',
			url: 'ibm.com',
			desc: 'Improved capabilities for IMAP transfer'
		}

	//MODAL
	var initializeModal = function() {
		var showOverlayClass = 'showOverlay';

		$('.work-bubble').click(function() {
			$('#overlay').addClass(showOverlayClass);

			//Insert details
			var this_bubble = $(this).attr('id');
			var bubble = this_bubble.substring(0, this_bubble.length-7)
			var selected;

			console.log(bubble);

			switch(bubble) {
				case 'fitbit':
					selected = fitbit;
					break;

				case 'ibm':
					selected = ibm;
					break;
			}

			$('#work-detail-container .modal-title').text(selected.title);
			$('#work-detail-container .modal-date').text(selected.date);
			$('#work-detail-container .modal-url').text(selected.url);
			$('#work-detail-container .modal-desc').text(selected.desc);


			$('#work-detail-container').show();
		});

		$('.project-bubble').click(function() {
			$('#overlay').addClass(showOverlayClass);
			$('#project-detail-container').show();
		});

		$('#overlay').click(function(evt){
            if(evt.target.className === showOverlayClass) {
                $('#overlay').removeClass(showOverlayClass);
                $('#work-detail-container, #project-detail-container').hide();
            }
        });
	};
	initializeModal();

});