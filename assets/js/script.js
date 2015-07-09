// GSAP scripts
TweenLite.set("#page-1", {opacity:1, zIndex:300});
TweenLite.set("#page-2", {opacity:0, zIndex:200});
TweenLite.set("#page-3", {opacity:0, zIndex:100});

$('.skip-step').on('click',
  	function() {
    TweenMax.to("#page-2", 0.5, {opacity:1, ease:Power4.easeInOut});
    TweenMax.to("#page-1", 0.5, {opacity:0, ease:Power4.easeInOut});
  	TweenMax.set("#page-2", {zIndex:200});
  	TweenMax.set("#page-1", {zIndex:100});
  	});

$('#slide-2').on('click',
  	function() {
    TweenMax.to("#page-2", 0.5, {opacity:1, ease:Power4.easeInOut});
    TweenMax.to("#page-1", 0.5, {opacity:0, ease:Power4.easeInOut});
    TweenMax.to("#page-3", 0.5, {opacity:0, ease:Power4.easeInOut});
  	TweenMax.set("#page-2", {zIndex:300});
  	TweenMax.set("#page-1", {zIndex:200});
  	TweenMax.set("#page-3", {zIndex:100});
  	});

$('#slide-1').on('click',
  	function() {
    TweenMax.to("#page-1", 0.5, {opacity:1, ease:Power4.easeInOut});
    TweenMax.to("#page-2", 0.5, {opacity:0, ease:Power4.easeInOut});
    TweenMax.to("#page-3", 0.5, {opacity:0, ease:Power4.easeInOut});
  	TweenMax.set("#page-1", {zIndex:300});
  	TweenMax.set("#page-2", {zIndex:200});
  	TweenMax.set("#page-3", {zIndex:100});
  	});

$('.submit').on('click',
	function(){
    TweenMax.to("#page-2", 0.5, {opacity:0, ease:Power4.easeInOut});
    TweenMax.to("#page-3", 0.5, {opacity:1, ease:Power4.easeInOut});
    TweenMax.set("#page-3", {zIndex:300});
  	TweenMax.set("#page-2", {zIndex:200});
  	TweenMax.set("#page-1", {zIndex:100});
	});



// scripts for schedule page

var share = $(".share-trigger");
	disabler = $("input[type='button']");
	skip = $("a.skip-step");
	sliderButton1 = $(".page-slider a span.circle-1");
	sliderButton2 = $(".page-slider a span.circle-2");

	share.click(function(){
		if (disabler.hasClass("disabled"))
			disabler.removeClass("disabled").removeAttr('disabled');

		if($(this).hasClass('messenger'))
			shareOnMessenger();
			//popupwindow('http://www.facebook.com/dialog/send?app_id=113669552052912&link=http://dev.istackmanila.com/awa-social-media-sharing/&redirect_uri=http://dev.istackmanila.com/awa-social-media-sharing/','AWConferences',560,400);


		if($(this).hasClass('facebook'))
			popupwindow('http://www.facebook.com/share.php?u=http://dev.istackmanila.com/awa-social-media-sharing/&title=AWConferences','AWConferences',560,400);
	});

	share.click(function(){
		if (skip.hasClass("skip-step"))
			skip.css({opacity: "0"})
	});

	sliderButton2.click(function(){
		if (sliderButton1.hasClass("active"))
			sliderButton1.removeClass("active"), 
			sliderButton2.addClass("active");
	});

	sliderButton1.click(function(){
		if (sliderButton2.hasClass("active"))
			sliderButton2.removeClass("active"), 
			sliderButton1.addClass("active");
	});

	skip.click(function(){
		if (sliderButton1.hasClass("active"))
			sliderButton1.removeClass("active"), 
			sliderButton2.addClass("active");
	});

	disabler.click(function(){
		if (sliderButton1.hasClass("active"))
			sliderButton1.removeClass("active"), 
			sliderButton2.addClass("active");
	});