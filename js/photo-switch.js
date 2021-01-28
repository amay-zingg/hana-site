// SELECTED PHOTO FROM THUMBNAIL OPENS IN FEATURED PHOTO AREA
const photoSwitch = function () {
    const featuredPhoto = document.querySelector('.featured-item');
    const secondPhoto = document.querySelector('.second-item');
    const thirdPhoto = document.querySelector('.third-item');

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
    photoSwitch();
};

// * * * * DOCUMENT READY
$(() => {
    init();
}); // * * * * END OF DOCUMENT READY