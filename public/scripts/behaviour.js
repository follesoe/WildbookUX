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

  // Setting hero to window height
	$(".hero").css("min-height", documentHeight - headerHeight - 80);

  // Watch movie - frontpage
  $("#watch-movie").on("click", function() {
    $(".hero .container").fadeOut("slow");
    $(".hero .video-wrapper").fadeIn("slow", function() {
      
      //var vimeoID = "123083341";
      //$(".hero .embed-container").html('<iframe id="heroVideo" src="https://player.vimeo.com/video/'+ vimeoID +'?api=1&player_id=heroVideo&portrait=0&title=0&color=bf1f48&badge=0&byline=0&autoplay=1" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>');

      var iframe = $("#heroVideo")[0],
      player = $f(iframe);

      function onFinish(id) {
          alert('video has ended');
          console.log('video has ended');
      }

    });
  });

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