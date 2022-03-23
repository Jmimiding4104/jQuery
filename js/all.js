$(document).ready(function () {
    $('.navbar-bm').click(function (event) {
        event.preventDefault();
        $(this).parent().find('ul').slideToggle();
    });
    $('.go-top').click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
});
