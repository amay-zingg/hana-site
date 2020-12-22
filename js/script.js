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
}

const navMenu = function () {
    // * * * * MENU CLICK OUTSIDE
    $(document).on("click", function(event){
    if(!$(event.target).closest(".responsive-nav-button").length){
        $(".responsive-nav").slideUp("fast");
        }
    });

// * * * * RESPONSIVE MENU
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


// window.fbAsyncInit = function() {
//     FB.init({
//         appId: '{your-app-id}',
//         cookie: true,
//         xfbml: true,
//         version: '{v8.0}'
//     });

// FB.AppEvents.logPageView();

// };

// (function(d, s, id){
//     var js, fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) {return;}
//     js = d.createElement(s); js.id = id;
//     js.src = "https://connect.facebook.net/en_US/sdk.js";
//     fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));
