$(function() {
	var documentHeight = window.innerHeight;
	var headerHeight = $(".page-header").outerHeight();

  checkScrollHeight();
  
  $(window).resize(function() {
    checkScrollHeight(); 
  });

  $(window).on("scroll", function() {
    checkScrollHeight();
  });

	$(".hero").css("min-height", documentHeight - headerHeight - 80);

}); // document ready

function checkScrollHeight() {
  var scrollPos = $(document).scrollTop();   
  
  if ($(window).width() < 768) {
    updateScrollPos(scrollPos);
  } else {
    $("body").removeClass("scrolled");
  }
}

function updateScrollPos(scrollPos) {
  if (scrollPos > 50) {
    $("body").addClass("scrolled");
  } else if (scrollPos < 50) {
    $("body").removeClass("scrolled");
  }
}

var map;
var brooklyn = new google.maps.LatLng(40.6743890, -73.9455);

var MY_MAPTYPE_ID = 'custom_style';

function initialize() {

  var featureOpts = [
    {
      stylers: [
        { hue: '#890000' },
        { visibility: 'simplified' },
        { gamma: 0.5 },
        { weight: 0.5 }
      ]
    },
    {
      elementType: 'labels',
      stylers: [
        { visibility: 'off' }
      ]
    },
    {
      featureType: 'water',
      stylers: [
        { color: '#005589' }
      ]
    }
  ];

  var mapOptions = {
    zoom: 12,
    center: brooklyn,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var styledMapOptions = {
    name: 'Custom Style'
  };

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
}

google.maps.event.addDomListener(window, 'load', initialize);