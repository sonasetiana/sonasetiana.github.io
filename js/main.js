var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-scroll'
});

$(window).scroll(function () {
    var top = $(this).scrollTop();
    $('nav').toggleClass('scrolled', top > 200);
    $('.nav-link').css('color', top > 200 ? 'black' : 'white');
    $('.navbar-brand').text(top > 200 ? 'Sona Setiana' : '');
    if (top == 0) {
        $('.nav-link').removeClass('active');
    }
});