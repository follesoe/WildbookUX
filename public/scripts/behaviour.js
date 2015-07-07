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

  $("#watch-movie").on("click", function() {
    $(".hero .container").fadeOut();
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