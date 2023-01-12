$(document).ready(() => {
    $(".search-hide").on("click", () => {
		$(".nav-link").hide();
		$(".navbar-search-block").show();
	})
 $(".btn-navbar").on("click", () => {
		$(".nav-link").show();
		$(".navbar-search-block").hide();
 })
});
	
