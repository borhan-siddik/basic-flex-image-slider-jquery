$("document").ready(function() {
	const sliderContent = $(".slider .slider-content");
	const totalSlides = $(".slider-content .slide-image").length;
	var counter = 0;
	$(".slider .left").click(function() {
		sliderContent.css("left", "-=500px");
		counter++;
		if(counter == totalSlides) {
			sliderContent.css("left", "0px");
			counter = 0;
		}
	});
	$(".slider .right").click(function() {
		if(counter == 0) {
			sliderContent.css({
				left: `${-(500*(totalSlides-1))}px`
			});
			counter = totalSlides;
			counter--;
		} else {
			sliderContent.css("left", "+=500px");
			counter--;
		}
	});
});