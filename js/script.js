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
			title: 'Senior Software Engineer',
			date: 'Aug. 2016 - Present',
			url: 'fitbit.com',
			desc: 'Currently working on the Health Programs Team writing Node.js apps. Previously worked on the Web team redesigning and rebuilding the logged in experience, moving Fitbit.com out of our monolith'
		};

		var ibm ={
			title: 'Software Engineering Intern',
			date: 'Summer 2014',
			url: 'ibm.com',
			desc: 'Improved capabilities for IMAP transfer'
		};

		var tsr = {
			title: 'CEO & COO',
			date: 'Jan. 2014 - Jan. 2016',
			url: 'tuftsstudentresources.com',
			desc: 'Led student run business, managing around 80 employees with over $250k in yearly revenue'
		};

		var tcc = {
			title: 'President',
			date: 'May 2013 - May 2015',
			url: 'tufts.ase.edu/tuftschinacare',
			desc: 'Led non-profit student group, planning events and fundraisers to provide foster families to orphans with special needs in China.'
		};

		var lux = {
			title: 'Director',
			date: 'Jan. 2013 - May. 2016',
			url: 'tuftslux.com',
			desc: 'Directed student charity fashion show for 3 years, raising thousands of dollars each year for Tufts China Care. Responsible for brand sponsorship and production.'
		};

		var personal = {
			title: 'Personal Site',
			date: 'Always a Work in Progress',
			url: 'mfeltz.github.io',
			desc: 'Using this as a portfolio as well as a space to experiment with UI and web development.'
		};
		var luxWeb = {
			title: 'LUX Fashion Show Website',
			date: 'Spring 2015',
			url: 'tuftslux.com',
			desc: 'Designed and created website for the Tufts LUX Fashion Show to showcase models, photoshoots, and of course our brand sponsorships.'
		};

		var tccWeb ={
			title: 'Tufts China Care Website',
			date: 'Spring 2014',
			url: 'ase.tufts.edu/tuftschinacare',
			desc: 'Designed and created website for Tufts China Care to provide information to potential new members, publicize events, and share what we\'ve accomplished.'
		};

		var jumbo ={
			title: 'Jumbo Savings',
			date: 'Spring 2014',
			url: 'jumbosavings.herokuapp.com',
			desc: 'Web app that analyzes students\' campus dining cash spending to better inform their meal plan decisions on a tight college budget.'
		};

		var scoop ={
			title: 'Scoop N Scootery App',
			date: 'Spring 2016',
			url: 'Prototype Video: https://youtu.be/XQyY2ZkRFUg',
			desc: 'Prototyped an app for Scoop N Scootery\' online ice cream delivery service. Researched UX best practices and performed user interviews to inform design decisions. (For Human Computer Interaction Course)'
		};

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
				case 'tsr':
					selected = tsr;
					break;
				case 'tcc':
					selected = tcc;
					break;
				case 'lux':
					selected = lux;
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

			//Insert details
			var this_bubble = $(this).attr('id');
			var selected;

			console.log(this_bubble);

			switch(this_bubble) {
				case 'personal-bubble':
					selected = personal;
					break;
				case 'lux-web-bubble':
					selected = luxWeb;
					break;
				case 'tcc-web-bubble':
					selected = tccWeb;
					break;
				case 'jumbo-bubble':
					selected = jumbo;
					break;
				case 'scoop-bubble':
					selected = scoop;
					break;
			}

			$('#project-detail-container .modal-title').text(selected.title);
			$('#project-detail-container .modal-date').text(selected.date);
			$('#project-detail-container .modal-url').text(selected.url);
			$('#project-detail-container .modal-desc').text(selected.desc);

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