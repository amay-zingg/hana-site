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

// * * * * LANDING PAGE BLOG POSTS
const blogPostArray = [
    {
        title: "I'm title 1",
        image: "../assets/pattern/PatternBone-Full.jpg",
        imageAlt: "Pattern Print Blue Bones | Frizz Kid Art",
        postContent: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis accusantium necessitatibus sed deleniti tempore accusamus saepe laboriosam dolorem, cum veritatis odio quae aperiam voluptatibus dicta eius? Cupiditate praesentium ab in.",
        link: "blog-article.html"
    },
     {
        title: "I'm title 2",
        image: "../assets/pattern/PatternBone-Full.jpg",
        imageAlt: "Pattern Print Blue Bones | Frizz Kid Art",
        postContent: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis accusantium necessitatibus sed deleniti tempore accusamus saepe laboriosam dolorem, cum veritatis odio quae aperiam voluptatibus dicta eius? Cupiditate praesentium ab in.",
        link: "blog-article.html"
    }

]

// * * * * TRUNCATE
const truncate = function(text,limit, after) {
    let content = text.split(" ").slice(0, limit);
    content = content.join(" ") + (after ? after : "");
    return content;
}

// * * * * PUT POSTS ON PAGE
const displayBlogPost = () => {

    const blogPost = blogPostArray.map((post) => {
        const content = truncate(post.postContent, 20, "...")
        return `<div class="blog-post-single">
                <img src="${post.image}" alt="${post.imageAlt}">
                <h3>${post.title}</h3>
                <p>${content}</p>
                <div class="button-box">
                    <a href="${post.link}" class="frizz-button">Read More</a>
                </div>
                </div>
        `
    })
    $(".blog-post-container").append(blogPost)
}

// * * * * Moved to init
// displayBlogPost();

// * * * * IF THESE ARE ON THE PAGE DISPLAY THEM
// * * * * MARQUEE
function banner() {
    // if index.html exists in the url
    if (window.location.href.indexOf('index.html') > -1) {
        // select the p by its id and hide it or - 
        $('.announcement-banner').css('visibility', 'visible');
    }
    else {
        // show it
        $('.announcement-banner').marquee().css('visibility', 'hidden');
    }
}

// function banner() {

//     let $banner = $('.announcement-banner');
//     let $banner2 = $('.responsive-announcement-banner');
//     let $banner3 = $('.announcement-banner').marquee();
//     let $banner4 = $('.responsive-announcement-banner').marquee();

//     return ($banner || $banner2 ? $banner3 || $banner4 : '');
// }    

// function banner() {
//     let $banner = $('.announcement-banner');
//     let $banner2 = $('.responsive-announcement-banner');
//     let $banner3 = $('.announcement-banner').marquee();
//     let $banner4 = $('.responsive-announcement-banner').marquee();

//     if ($banner) { return $banner3; }
//     else if ($banner2) { return $banner4; }
//     else { return null; }
// }

    // // SELECTED PHOTO FROM THUMBNAIL OPENS IN FEATURED PHOTO AREA\
    const photoSwitch = function () {
        const featuredPhoto = document.querySelector('.featured-item');
        const secondPhoto = document.querySelector('.second-item');
        const thirdPhoto = document.querySelector('.third-item');

        function onPageLoad() {
            secondPhoto.classList.add('unselected');
            thirdPhoto.classList.add('unselected');
        };

        onPageLoad();

        document.querySelector('.select-featured-photo').addEventListener('click', function () {
            featuredPhoto.classList.add('selected');
            featuredPhoto.classList.remove('unselected');
            secondPhoto.classList.add('unselected');
            secondPhoto.classList.remove('selected');
            thirdPhoto.classList.add('unselected');
            thirdPhoto.classList.remove('selected');
        });

        document.querySelector('.select-second-photo').addEventListener('click', function () {
            featuredPhoto.classList.add('unselected');
            featuredPhoto.classList.remove('selected');
            secondPhoto.classList.add('selected');
            secondPhoto.classList.remove('unselected');
            thirdPhoto.classList.add('unselected');
            thirdPhoto.classList.remove('selected');
        });

        document.querySelector('.select-third-photo').addEventListener('click', function () {
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
    navMenu();
    banner();
    // photoSwitch();
    displayBlogPost();
};

// * * * * DOCUMENT READY
$(() => {
    init();

}); // * * * * END OF DOCUMENT READY
