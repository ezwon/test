// GSAP scripts
TweenLite.set("#page-1", {x:0, opacity:1, zIndex:3});
TweenLite.set("#page-2", {x:0, opacity:0, zIndex:2});
TweenLite.set("#page-3", {x:0, opacity:0, zIndex:1});

$('.skip-step').on('click',
  function() {
    TweenMax.to("#page-2", 0.5, {opacity:1, zIndex:2, ease:Power4.easeInOut});
    TweenMax.to("#page-1", 0.5, {opacity:0, zindex:1, ease:Power4.easeInOut});
  });


// scripts for schedule page

var share = $(".share-trigger");
	disabler = $("input[type='button']");
	skip = $("a.skip-step");

	share.click(function(){
		if (disabler.hasClass("disabled"))
			disabler.removeClass("disabled").removeAttr('disabled');
	});

	share.click(function(){
		if (skip.hasClass("skip-step"))
			skip.css({display: "none"})
	});

