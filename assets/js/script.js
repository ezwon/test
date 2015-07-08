

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