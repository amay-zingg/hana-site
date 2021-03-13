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
        image: "./assets/pattern/PatternBone-Full.jpg",
        imageAlt: "Pattern Print Blue Bones | Frizz Kid Art",
        postContent: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis accusantium necessitatibus sed deleniti tempore accusamus saepe laboriosam dolorem, cum veritatis odio quae aperiam voluptatibus dicta eius? Cupiditate praesentium ab in.",
        link: "blog-article.html"
    },
     {
        title: "I'm title 2",
        image: "./assets/pattern/PatternBone-Full.jpg",
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


// // SELECTED PHOTO FROM THUMBNAIL OPENS IN FEATURED PHOTO AREA\
const photoSwitch = function () {
    const featuredPhoto = document.querySelector('.featured-item');
    const secondPhoto = document.querySelector('.second-item').classList.add('unselected');
    const thirdPhoto = document.querySelector('.third-item').classList.add('unselected');

    // function onPageLoad() {
    //     secondPhoto.classList.add('unselected');
    //     thirdPhoto.classList.add('unselected');
    // };

    // onPageLoad();

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

// * * * * PORTFOLIO PAGE GALLERIES
const affirmationArray = [
    {
        title: "Fight Fascism",
        image: "./assets/affimations/FightFascism.jpg",
        imageAlt: "Fight Fascism Art Print | Frizz Kid Art",
        link: "store.html"
    },
     {
        title: "Grow Together Cactus",
        image: "./assets/affimations/GrowTogetherCactus.jpg",
        imageAlt: "Grow Together Cactus Art Print | Frizz Kid Art",
        link: "store.html"
    },
     {
        title: "Healing is not Linear",
        image: "./assets/affimations/Healing.jpg",
        imageAlt: "Healing is not Linear Art Print | Frizz Kid Art",
        link: "store.html"
    },
     {
        title: "Hold Space For Yourself",
        image: "./assets/affimations/HoldSpace.jpg",
        imageAlt: "Hold Space For Yourself Art Print | Frizz Kid Art",
        link: "store.html"
    },
     {
        title: "You are Incredible in Every Way",
        image: "./assets/affimations/IncredibleInEveryWay.jpg",
        imageAlt: "You are Incredible in Every Way Art Print | Frizz Kid Art",
        link: "store.html"
    },
     {
        title: "Be Kind to Yourself",
        image: "./assets/affimations/KindToYourself.jpg",
        imageAlt: "Be Kind to Yourself Art Print | Frizz Kid Art",
        link: "store.html"
    },
     {
        title: "Koala Climate Justice",
        image: "./assets/affimations/KoalaClimate.jpg",
        imageAlt: "Koala Climate Justice Art Print | Frizz Kid Art",
        link: "store.html"
    },
     {
        title: "Raccoon Best",
        image: "./assets/affimations/RaccoonBest.jpg",
        imageAlt: "Raccoon Best Art Print | Frizz Kid Art",
        link: "store.html"
    },
     {
        title: "Shrink You Down",
        image: "./assets/affimations/ShrinkYouDown.jpg",
        imageAlt: "Shrink You Down Art Print | Frizz Kid Art",
        link: "store.html"
    },
     {
        title: "Survived So Much",
        image: "./assets/affimations/Survived.jpg",
        imageAlt: "Survived So Much Art Print | Frizz Kid Art",
        link: "store.html"
    },
     {
        title: "Survive These Difficult Times",
        image: "./assets/affimations/SurviveLikeCheetahs.jpg",
        imageAlt: "Survive These Difficult Times Art Print | Frizz Kid Art",
        link: "store.html"
    },
     {
        title: "Vulnerability",
        image: "./assets/affimations/Vulnerability.jpg",
        imageAlt: "Vulnerability Art Print | Frizz Kid Art",
        link: "store.html"
    },
    {
        title: "Valuable and Important",
        image: "./assets/affimations/WorkBeaver.jpg",
        imageAlt: "Valuable and Important Art Print | Frizz Kid Art",
        link: "store.html"
    }

]

const generalArtArray = [
    {
        title: "Fight Fascism",
        image: "./assets/affimations/FightFascism.jpg",
        imageAlt: "Fight Fascism Art Print | Frizz Kid Art",
        link: "store.html"
    },
    {
        title: "Fight Fascism",
        image: "./assets/affimations/FightFascism.jpg",
        imageAlt: "Fight Fascism Art Print | Frizz Kid Art",
        link: "store.html"
    },
    {
        title: "Fight Fascism",
        image: "./assets/affimations/FightFascism.jpg",
        imageAlt: "Fight Fascism Art Print | Frizz Kid Art",
        link: "store.html"
    },
    {
        title: "Fight Fascism",
        image: "./assets/affimations/FightFascism.jpg",
        imageAlt: "Fight Fascism Art Print | Frizz Kid Art",
        link: "store.html"
    },
    {
        title: "Fight Fascism",
        image: "./assets/affimations/FightFascism.jpg",
        imageAlt: "Fight Fascism Art Print | Frizz Kid Art",
        link: "store.html"
    },
    {
        title: "Fight Fascism",
        image: "./assets/affimations/FightFascism.jpg",
        imageAlt: "Fight Fascism Art Print | Frizz Kid Art",
        link: "store.html"
    },
    {
        title: "Fight Fascism",
        image: "./assets/affimations/FightFascism.jpg",
        imageAlt: "Fight Fascism Art Print | Frizz Kid Art",
        link: "store.html"
    },
    {
        title: "Fight Fascism",
        image: "./assets/affimations/FightFascism.jpg",
        imageAlt: "Fight Fascism Art Print | Frizz Kid Art",
        link: "store.html"
    }
]

// * * * * PUT GALLERIES ON PAGE
const displayAffirmationGallery = () => {

    const affirmationImg = affirmationArray.map((post) => {
        return `<figure class="image-frame">
                    <img src="${post.image}" alt="${post.imageAlt}">
                    <figcaption>
                        <p>${post.title}</p>
                        <a href="${post.link}" class="store-link">See in Store!</a>
                    </figcaption>
                </figure>
        `
    })
    $(".affirmation-gallery").append(affirmationImg)
}

const displayGeneralArtGallery = () => {

    const generalImg = generalArtArray.map((post) => {
        return `<figure class="image-frame">
                    <img src="${post.image}" alt="${post.imageAlt}">
                    <figcaption>
                        <p>${post.title}</p>
                        <a href="${post.link}" class="store-link">See in Store!</a>
                    </figcaption>
                </figure>
        `
    })
    $(".general-art-gallery").append(generalImg)
}
  

// * * * * INIT PIECES
init = function () {
    scroll();
    navMenu();
    // photoSwitch();
    displayBlogPost();
    displayAffirmationGallery();
    displayGeneralArtGallery();
};

// * * * * DOCUMENT READY
$(() => {
    init();
}); // * * * * END OF DOCUMENT READY
