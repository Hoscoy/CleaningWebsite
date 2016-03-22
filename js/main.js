/* Hamburger menu */

	$('document').ready(function() {
		$('#hamburger').on('click', function() {
			$('nav').toggleClass('showMenu');
		});

		$('nav a').on('click', function() {
			$('nav').removeClass('showMenu');
		});
	});

/* Cycle through slider images */

	var sliderImages = [
			'images/slider/1.jpg',
			'images/slider/2.jpg',
			'images/slider/3.jpg',
			'images/slider/4.jpg'
		],
		currentPicture = 1;

	setInterval(function() {
		// mod operator
		var index = currentPicture % 4;

		// show psuedo element to hide image change, uses css transition on opacity
		$('header').addClass('transition');

		// delay background image change to allow for opacity transition
		setTimeout(function() {
			// change background image, and begin fading out opacity
			$('header').css('background-image', 'url("' + sliderImages[index] + '")');
			$('header').removeClass('transition');
			currentPicture++;
		}, 300);

	}, 6000);