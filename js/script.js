$('#btnUp').addClass('d-none');
$(window).scroll(function() {
	showBtnUp();
});
function showBtnUp() {
	var scrollPosition = $(document).scrollTop();
	console.log(scrollPosition);

	if(scrollPosition < 1000) {
		$('#btnUp').addClass('d-none');
	} else {
		$('#btnUp').removeClass('d-none');
	}
}
$('.smooth').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 2000);
        return false;
      }
    }
  });

