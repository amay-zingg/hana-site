// * * * * SMOOTH SCROLLING ON SAME PAGE LINKS
$("a[href^=\\#]").click(function(e) {   
    e.preventDefault();   
    var dest = $(this).attr('href');   
    console.log(dest);   
    $('html,body').animate(
        { scrollTop: $(dest).offset().top }
        , 'slow'
    ); 
});

// * * * * TICKER TAPE MARQUEE
const banner = function () {
    let $banner = $('.announcement-banner').marquee();
    let $banner2 = $('.responsive-announcement-banner').marquee();
}

// * * * * RESPONSIVE MENU
const navMenu = function () {
    // * * * * MENU CLICK OUTSIDE
    $(document).on("click", function(event){
    if(!$(event.target).closest(".responsive-nav-button").length){
        $(".responsive-nav").slideUp("fast");
        }
    });

    $( ".responsive-nav-button" ).click(function() {
        $( ".responsive-nav" ).toggle("slow");
    });
};

// * * * * INIT PIECES
init = function () {
    // navigationScroll();
    banner();
    navMenu();
};

// * * * * DOCUMENT READY
$(() => {
    init();
}); // * * * * END OF DOCUMENT READY
