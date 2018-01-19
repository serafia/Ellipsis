$('#btnUp').addClass('d-none');
$(window).scroll(function() {
	showBtnUp();
});
function showBtnUp() {
	var scrollPosition = $(document).scrollTop();
	//console.log(scrollPosition);
	var windowWidth = $(window).innerWidth;
	//console.log(windowWidth);
	if(windowWidth > 767) {
		if(scrollPosition < 1000) {
			$('#btnUp').addClass('d-none');
		} else {
			$('#btnUp').removeClass('d-none');
		}
	} else {
		if(scrollPosition < 600) {
			$('#btnUp').addClass('d-none');
		} else {
			$('#btnUp').removeClass('d-none');
		}
	}	
}

$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate ({
                 scrollTop: target.offset().top
             }, 1000);
            return false;
        }
    }
});


