// Social Media
window.fbAsyncInit = function() {
        FB.init({
            appId      : '113669552052912',
            xfbml      : true,
            version    : 'v2.4'
        });
    };

    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    function shareOnMessenger(){
        FB.ui({
            method: 'send',
            link: 'http://affiliateworldconferences.com/asia/share/'
        });
    }

    function popupwindow(url, title, w, h) {
        var left = (screen.width/2)-(w/2);
        var top = (screen.height/2)-(h/2);
        return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
    }
    twttr.events.bind('tweet', function (event) {});

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
			popupwindow('http://www.facebook.com/share.php?u=http://affiliateworldconferences.com/asia/share/&title=AWConferences','AWConferences',560,400);
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