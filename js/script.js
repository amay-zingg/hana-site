// * * * * SMOOTH SCROLLING ON SAME PAGE LINKS
const navigationScroll = function () {
    let scrollLink = $('.scroll');

    scrollLink.click(function (e) {
        e.preventDefault();
        $('body, html').animate(
            {
                scrollTop: $(this.hash).offset().top
            },
            1000
        );
    });
};

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
    navigationScroll();
    banner();
    navMenu();
};

// * * * * DOCUMENT READY
$(() => {
    init();
}); // * * * * END OF DOCUMENT READY
