 //google map custom marker

var myCenter=new google.maps.LatLng(22.300708, 114.172569);

function initialize()
{
var mapProp = {
  center:myCenter,
  zoom:17,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker=new google.maps.Marker({
  position:myCenter,
  icon:'assets/images/marker.png'
  });

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);


// scripts for schedule page

$('.timeline-link').hover(function() {
    $('.timeline-hover').show();
}, function() {
    $('.timeline-hover').hide();
});

