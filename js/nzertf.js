// when menu item clicked
$('.collapse').click(function () {
    // close navbar if open
    //$(".navbar-toggle:not(.collapsed)").click();
    //$(this).removeClass("in").addClass("collapse");
    $(".navbar-default .in").removeClass("in").addClass("collapse");
});
// when menu item clicked
$('.navbar-toggle').click(function () {
    // close navbar if open
    //$(".navbar-toggle:not(.collapsed)").click();
    //$(this).removeClass("in").addClass("collapse");
    $(".childMenu.in").removeClass("in").addClass("collapse");
});


// Scroll Spy for Side Navbar
$('body').scrollspy({ target: '.sidenav-padding' });

// $('[data-spy="scroll"]').each(function () {
//   var $spy = $(this).scrollspy('refresh')
// });