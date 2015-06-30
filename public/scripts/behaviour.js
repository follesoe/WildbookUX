$(function() {
	var documentHeight = window.innerHeight;
	var headerHeight = $(".page-header").outerHeight();

	$(".hero").css("min-height", documentHeight - headerHeight - 80);

}); // document ready