// * * * * TICKER TAPE MARQUEE
const banner = function () {
    let $banner = $('.announcement-banner').marquee();
    let $banner2 = $('.responsive-announcement-banner').marquee();
};
//https://github.com/aamirafridi/jQuery.Marquee 

// * * * * INIT PIECES
init = function () {
    banner();
};

// * * * * DOCUMENT READY
$(() => {
    init();
}); // * * * * END OF DOCUMENT READY
