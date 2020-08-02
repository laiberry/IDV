$(function() {

	$('.imgs').flickity({
		cellAlign: 'left',
		lazyLoad: true,
		pageDots: true,
		prevNextButtons: false,
		wrapAround: true
	});

	var anchor = $('a[href*="#"]');
	var didScroll;
	var nav = $('nav a');

	$(window).scroll(function() {
		didScroll = true;
	});

	setInterval(function() {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 700);

	function hasScrolled() {

		var thisScroll = $(this).scrollTop();

		nav.each(function() {
			if (thisScroll > $($(this).attr('href')).offset().top - 80) {
				nav.removeClass('active');
				$(this).addClass('active');
			}
		});

	}

	$(anchor).on('click', function() {

	    event.preventDefault();

	    $('body,html').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 700, 'swing');

	});

});
