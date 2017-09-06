var mn = $(".navbar.navbar-default");
var mns = "navbar-fixed-top";
var hdr = $('.page-header').height();

$(window).scroll(function() {

    if ($(this).scrollTop() >= 60) {
        console.log("hellooooooooooooooooooooooooooooooooooooo")
        mn.slideDown("slow", 5000);
    } else {
        mn.removeClass(mns);
    }
});



$(".mainLi").on("click", function() {

    $(this).siblings('li').removeClass('active').end().addClass('active');
});

$(".sideli").on("click", function() {

    $(this).siblings('li').removeClass('active-link').end().addClass('active-link');
});