// * * * * SMOOTH SCROLLING ON SAME PAGE LINKS
const scroll = function () {
    $("a[href^=\\#]").click(function(e) {   
    e.preventDefault();   
    var dest = $(this).attr('href');   
    console.log(dest);   
    $('html,body').animate(
        { scrollTop: $(dest).offset().top }
        , 'slow'
    ); 
});
};

// * * * * TICKER TAPE MARQUEE
const banner = function () {
    let $banner = $('.announcement-banner').marquee();
    let $banner2 = $('.responsive-announcement-banner').marquee();
};

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

// SELECTED PHOTO FROM THUMBNAIL OPENS IN FEATURED PHOTO AREA
const productPhotos = function () {
    const featuredPhoto = document.querySelector('.featured-photo');
    const secondPhoto = document.querySelector('.second-photo');
    const thirdPhoto = document.querySelector('.third-photo');

    function onPageLoad() {
        secondPhoto.classList.add('unselected');
        thirdPhoto.classList.add('unselected');
    };

    onPageLoad();

    document.querySelector('.select-featured-photo').addEventListener('click', function() {
        featuredPhoto.classList.add('selected');
        featuredPhoto.classList.remove('unselected');
        secondPhoto.classList.add('unselected');
        secondPhoto.classList.remove('selected');
        thirdPhoto.classList.add('unselected');
        thirdPhoto.classList.remove('selected');
    });

    document.querySelector('.select-second-photo').addEventListener('click', function() {
        featuredPhoto.classList.add('unselected');
        featuredPhoto.classList.remove('selected');
        secondPhoto.classList.add('selected');
        secondPhoto.classList.remove('unselected');
        thirdPhoto.classList.add('unselected');
        thirdPhoto.classList.remove('selected');
    });

    document.querySelector('.select-third-photo').addEventListener('click', function() {
        featuredPhoto.classList.add('unselected');
        featuredPhoto.classList.remove('selected');
        secondPhoto.classList.add('unselected');
        secondPhoto.classList.remove('selected');
        thirdPhoto.classList.add('selected');
        thirdPhoto.classList.remove('unselected');
    });
};

// * * * * INIT PIECES
init = function () {
    scroll();
    banner();
    navMenu();
    productPhotos();
};

// * * * * DOCUMENT READY
$(() => {
    init();
}); // * * * * END OF DOCUMENT READY
