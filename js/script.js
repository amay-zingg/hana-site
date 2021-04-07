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

const patternArray = [
    {
        title: "Blue Bones Pattern",
        image: "./assets/pattern/PatternBone-Square.jpg",
        imageAlt: "Blue Bones Pattern Art Print | Frizz Kid Art",
        link: "store.html"
    },
    {
        title: "Green Moth Pattern",
        image: "./assets/pattern/PatternMoth-Square.jpg",
        imageAlt: "Green Moth Pattern Art Print | Frizz Kid Art",
        link: "store.html"
    },
    {
        title: "Red Eye Pattern",
        image: "./assets/pattern/PatternEye-Square.jpg",
        imageAlt: "Red Eye Pattern Art Print | Frizz Kid Art",
        link: "store.html"
    },
    {
        title: "Purple Moon Pattern",
        image: "./assets/pattern/PatternMoon-Square.jpg",
        imageAlt: "Purple Moon Pattern Art Print | Frizz Kid Art",
        link: "store.html"
    }
]

const generalArtArray = [
    {
        title: "Devdas",
        image: "./assets/generalArt/Devdas-Square.jpg",
        imageAlt: "Devdas Art Print | Frizz Kid Art",
        link: "store.html"
    },
    {
        title: "Eff Diet Culture",
        image: "./assets/generalArt/EffDietCulture-Square.jpg",
        imageAlt: "Eff Diet Culture Art Print | Frizz Kid Art",
        link: "store.html"
    },
    {
        title: "Umrao Jaan",
        image: "./assets/generalArt/UmraoJaan-Square.jpg",
        imageAlt: "Umrao Jaan Art Print | Frizz Kid Art",
        link: "store.html"
    },
    {
        title: "Body Posi Witches",
        image: "./assets/generalArt/Witches-Square.jpg",
        imageAlt: "Body Posi Witches Art Print | Frizz Kid Art",
        link: "store.html"
    }
]

const tattooArray = [
    {
        title: "Amy Winehouse Tattoo",
        image: "./assets/tattoos/Tattoo-AmyWinehouse.jpg",
        imageAlt: "Amy Winehouse Tattoo | Frizz Kid Art"
    },
    {
        title: "Bee Tattoo",
        image: "./assets/tattoos/Tattoo-Bee.jpg",
        imageAlt: "Bee Tattoo | Frizz Kid Art"
    },
    {
        title: "Burnt Out Blossom Tattoo",
        image: "./assets/tattoos/Tattoo-BurntOutBlossom.jpg",
        imageAlt: "Burnt Out Blossom Tattoo | Frizz Kid Art"
    },
    {
        title: "Conjure Resistance Tattoo",
        image: "./assets/tattoos/Tattoo-ConjureResistance.jpg",
        imageAlt: "Conjure Resistance Tattoo | Frizz Kid Art"
    },
    {
        title: "Conjure Resistance Tattoo",
        image: "./assets/tattoos/Tattoo-ConjureResistance2.jpg",
        imageAlt: "Conjure Resistance Tattoo | Frizz Kid Art"
    },
    {
        title: "Conjure Resistance Tattoo",
        image: "./assets/tattoos/Tattoo-ConjureResistance3.jpg",
        imageAlt: "Conjure Resistance Tattoo | Frizz Kid Art"
    },
    {
        title: "First Book Cover Art Tattoo",
        image: "./assets/tattoos/Tattoo-FirstBook.jpg",
        imageAlt: "First Book Cover Art Tattoo | Frizz Kid Art"
    },
    {
        title: "Flower Tattoo",
        image: "./assets/tattoos/Tattoo-Flower.jpg",
        imageAlt: "Flower Tattoo | Frizz Kid Art"
    },
    {
        title: "Gentle With Yourself Tattoo",
        image: "./assets/tattoos/Tattoo-Gentle.jpg",
        imageAlt: "Gentle With Yourself Tattoo | Frizz Kid Art",
        instaLink: "https://www.instagram.com/joeyramonatattooer",
        instaTitle: "Go to joeyramonatattooer on Instagram",
        instaText: "@joeyramonatattooer"
    },
    {
        title: "Hairy Lady Tattoo",
        image: "./assets/tattoos/Tattoo-HairyLady.jpg",
        imageAlt: "Hairy Lady Tattoo | Frizz Kid Art",
        instaLink: "https://www.instagram.com/joeyramonatattooer",
        instaTitle: "Go to joeyramonatattooer on Instagram",
        instaText: "@joeyramonatattooer"
    },
    {
        title: "Haunting Ghost Tattoo",
        image: "./assets/tattoos/Tattoo-Haunting.jpg",
        imageAlt: "Haunting Ghost Tattoo | Frizz Kid Art"
    },
    {
        title: "Keep Going Tattoo",
        image: "./assets/tattoos/Tattoo-KeepGoing.jpg",
        imageAlt: "Keep Going Tattoo | Frizz Kid Art",
        instaLink: "https://www.instagram.com/vegas.ink",
        instaTitle: "Go to vegas.ink on Instagram",
        instaText: "@vegas.ink"
    },
    {
        title: "Healing is not Linear Tattoo",
        image: "./assets/tattoos/Tattoo-LinearHealing1.jpg",
        imageAlt: "Healing is not Linear Tattoo | Frizz Kid Art"
    },
    {
        title: "Healing is not Linear Tattoo",
        image: "./assets/tattoos/Tattoo-LinearHealing2.jpg",
        imageAlt: "Healing is not Linear Tattoo | Frizz Kid Art"
    },
    {
        title: "Healing is not Linear Tattoo",
        image: "./assets/tattoos/Tattoo-LinearHealing3.jpg",
        imageAlt: "Healing is not Linear Tattoo | Frizz Kid Art"
    },
    {
        title: "Healing is not Linear Tattoo",
        image: "./assets/tattoos/Tattoo-LinearHealing4.jpg",
        imageAlt: "Healing is not Linear Tattoo | Frizz Kid Art"
    },
    {
        title: "Healing is not Linear Tattoo",
        image: "./assets/tattoos/Tattoo-LinearHealing5.jpg",
        imageAlt: "Healing is not Linear Tattoo | Frizz Kid Art"
    },
    {
        title: "Healing is not Linear Tattoo",
        image: "./assets/tattoos/Tattoo-LinearHealing6.jpg",
        imageAlt: "Healing is not Linear Tattoo | Frizz Kid Art"
    },
    {
        title: "Healing is not Linear Tattoo",
        image: "./assets/tattoos/Tattoo-LinearHealing7.jpg",
        imageAlt: "Healing is not Linear Tattoo | Frizz Kid Art"
    },
    {
        title: "Healing is not Linear Tattoo",
        image: "./assets/tattoos/Tattoo-LinearHealing8.jpg",
        imageAlt: "Healing is not Linear Tattoo | Frizz Kid Art"
    },
    {
        title: "Healing is not Linear Tattoo",
        image: "./assets/tattoos/Tattoo-LinearHealing9.jpg",
        imageAlt: "Healing is not Linear Tattoo | Frizz Kid Art"
    },
    {
        title: "Healing is not Linear Tattoo",
        image: "./assets/tattoos/Tattoo-LinearHealing10.jpg",
        imageAlt: "Healing is not Linear Tattoo | Frizz Kid Art"
    },
    {
        title: "Healing is not Linear Tattoo",
        image: "./assets/tattoos/Tattoo-LinearHealing11.jpg",
        imageAlt: "Healing is not Linear Tattoo | Frizz Kid Art"
    },
    {
        title: "Healing is not Linear Tattoo",
        image: "./assets/tattoos/Tattoo-LinearHealing12.jpg",
        imageAlt: "Healing is not Linear Tattoo | Frizz Kid Art"
    },
    {
        title: "You Survived So Much Tattoo",
        image: "./assets/tattoos/Tattoo-MountainSurvival.jpg",
        imageAlt: "You Survived So Much Tattoo | Frizz Kid Art"
    },
    {
        title: "You Survived So MuchTattoo",
        image: "./assets/tattoos/Tattoo-MountainSurvival2.jpg",
        imageAlt: "You Survived So Much Tattoo | Frizz Kid Art"
    },
    {
        title: "You Survived So Much Tattoo",
        image: "./assets/tattoos/Tattoo-MountainSurvival3.jpg",
        imageAlt: "You Survived So Much Tattoo | Frizz Kid Art"
    },
    {
        title: "Queer Tattoo",
        image: "./assets/tattoos/Tattoo-Queer.jpg",
        imageAlt: "Queer Tattoo | Frizz Kid Art",
        instaLink: "https://www.instagram.com/vegas.ink",
        instaTitle: "Go to vegas.ink on Instagram",
        instaText: "@vegas.ink"
    },
    {
        title: "Queer Tattoo",
        image: "./assets/tattoos/Tattoo-Queer2.jpg",
        imageAlt: "Queer Tattoo | Frizz Kid Art",
        instaLink: "https://www.instagram.com/vegas.ink",
        instaTitle: "Go to vegas.ink on Instagram",
        instaText: "@vegas.ink"
    },
    {
        title: "Rise and Riot Tattoo",
        image: "./assets/tattoos/Tattoo-RiseAndRiot.jpg",
        imageAlt: "Rise and Riot Tattoo | Frizz Kid Art"
    },
    {
        title: "Rise and Riot Tattoo",
        image: "./assets/tattoos/Tattoo-RiseAndRiot2.jpg",
        imageAlt: "Rise and Riot Tattoo | Frizz Kid Art"
    },
    {
        title: "Skull Tattoo",
        image: "./assets/tattoos/Tattoo-Skull.jpg",
        imageAlt: "Skull Tattoo | Frizz Kid Art"
    },
    {
        title: "Tattoo Flash Sheet",
        image: "./assets/tattoos/Tattoo-FlashSheet.jpg",
        imageAlt: "Tattoo Flash Sheet | Frizz Kid Art"
    },
    {
        title: "Tattoo Flash Sheet",
        image: "./assets/tattoos/Tattoo-FlashSheet2.jpg",
        imageAlt: "Tattoo Flash Sheet | Frizz Kid Art"
    },
    {
        title: "Tattoo Flash Sheet",
        image: "./assets/tattoos/Tattoo-FlashSheet3.jpg",
        imageAlt: "Tattoo Flash Sheet | Frizz Kid Art"
    },
    {
        title: "Tattoo Flash Sheet",
        image: "./assets/tattoos/Tattoo-FlashSheet4.jpg",
        imageAlt: "Tattoo Flash Sheet | Frizz Kid Art"
    },
    {
        title: "Tattoo Flash Sheet",
        image: "./assets/tattoos/Tattoo-FlashSheet5.jpg",
        imageAlt: "Tattoo Flash Sheet | Frizz Kid Art"
    }
    
]

const eventArray = [
    {
        title: "Hana Shafi Book Fall 2020",
        image: "./assets/hanaPhotos/HanaShafi-BookFall2020.jpg",
        imageAlt: "Hana Shafi Book Fall 2020 | Frizz Kid Art"
    },
    {
        title: "Small, Broke, and Kind of Dirty Book Baby",
        image: "./assets/hanaPhotos//HanaShafi-BookBaby.jpg",
        imageAlt: "Small, Broke, and Kind of Dirty Book Baby | Frizz Kid Art"
    },
    {
        title: "Hana Shafi Small, Broke, and Kind of Dirty Farm Book Reading 2020",
        image: "./assets/hanaPhotos/HanaShafi-FarmBookReading2020.jpg",
        imageAlt: "Hana Shafi Book Fall 2020 | Frizz Kid Art"
    },
    {
        title: "Hana Shafi & Group - Battle Of The Bards",
        image: "./assets/events/BattleOfTheBards.jpg",
        imageAlt: "Hana Shafi & Group - Battle Of The Bards | Frizz Kid Art"
    },
    {
        title: "Mural for CWF 2019",
        image: "./assets/events/MuralforCWF2019.jpg",
        imageAlt: "Mural for CWF 2019 | Frizz Kid Art"
    },
    {
        title: "Hana Shafi - Basement Revue Reading",
        image: "./assets/events/BasementRevueReading.jpg",
        imageAlt: "Hana Shafi - Basement Revue Reading | Frizz Kid Art"
    },
    {
        title: "Toronto Biennial Performance 2019",
        image: "./assets/events/TorontoBiennialPerformance2019-2.jpg",
        imageAlt: "Toronto Biennial Performance 2019 | Frizz Kid Art"
    },
    {
        title: "Toronto Biennial Performance 2019",
        image: "./assets/events/TorontoBiennialPerformance2019.jpg",
        imageAlt: "Toronto Biennial Performance 2019 | Frizz Kid Art"
    },
    {
        title: "Frizz Kid Art Window Display for TKVO",
        image: "./assets/events/WindowDisplayForTKVO-3.jpg",
        imageAlt: "Window Display for TKVO | Frizz Kid Art"
    },
    {
        title: "Frizz Kid Art Window Display for TKVO",
        image: "./assets/events/WindowDisplayForTKVO-2.jpg",
        imageAlt: "Window Display for TKVO | Frizz Kid Art"
    },
    {
        title: "Frizz Kid Art Window Display for TKVO",
        image: "./assets/events/WindowDisplayForTKVO.jpg",
        imageAlt: "Window Display for TKVO | Frizz Kid Art"
    },
    {
        title: "Window Display for Hard Feelings",
        image: "./assets/events/WindowDisplayForHardFeelings-2.jpg",
        imageAlt: "Window Display for Hard Feelings | Frizz Kid Art"
    },
    {
        title: "Window Display for Hard Feelings",
        image: "./assets/events/WindowDisplayForHardFeelings-1.jpg",
        imageAlt: "Window Display for Hard Feelings | Frizz Kid Art"
    },
    {
        title: "Window Display for Hard Feelings",
        image: "./assets/events/WindowDisplayForHardFeelings.jpg",
        imageAlt: "Window Display for Hard Feelings | Frizz Kid Art"
    },
    {
        title: "Hana Shafi Reading",
        image: "./assets/events/Reading.jpg",
        imageAlt: "Hana Shafi Reading | Frizz Kid Art"
    },
    {
        title: "University Of Oregon Speaking",
        image: "./assets/events/UniversityOfOregonSpeaking-3.jpg",
        imageAlt: "University Of Oregon Speaking | Frizz Kid Art"
    },
    {
        title: "University Of Oregon Speaking",
        image: "./assets/events/UniversityOfOregonSpeaking-2.jpg",
        imageAlt: "University Of Oregon Speaking | Frizz Kid Art"
    },
    {
        title: "University Of Oregon Speaking",
        image: "./assets/events/UniversityOfOregonSpeaking.jpg",
        imageAlt: "University Of Oregon Speaking | Frizz Kid Art"
    },
    {
        title: "Calgary Word Fest 2018",
        image: "./assets/events/CalgaryWordFest2018.jpg",
        imageAlt: "Calgary Word Fest 2018 | Frizz Kid Art"
    },
    {
        title: "Hana Shafi Reading",
        image: "./assets/hanaPhotos/HanaShafiReading.jpg",
        imageAlt: "Hana Shafi Reading | Frizz Kid Art"
    },
    {
        title: "Reading At The Snail",
        image: "./assets/events/ReadingAtTheSnail.jpg",
        imageAlt: "Reading At The Snail | Frizz Kid Art"
    },
    {
        title: "Hana Shafi It Begins with the Body Book Launch",
        image: "./assets/events/GladDayFirstBookLaunch-2.jpg",
        imageAlt: "Hana Shafi It Begins with the Body Book Launch | Frizz Kid Art"
    },
    {
        title: "Hana Shafi It Begins with the Body Book Launch",
        image: "./assets/events/GladDayFirstBookLaunch-3.jpg",
        imageAlt: "Hana Shafi It Begins with the Body Book Launch | Frizz Kid Art"
    },
    {
        title: "Hana Shafi It Begins with the Body Book Launch",
        image: "./assets/events/GladDayFirstBookLaunch.jpg",
        imageAlt: "Hana Shafi It Begins with the Body Book Launch | Frizz Kid Art"
    },
    {
        title: "Hana Shafi First Book for sale in Indigo",
        image: "./assets/events/FirstBookIndigo.jpg",
        imageAlt: "Hana Shafi First Book for sale in Indigo | Frizz Kid Art"
    },
    {
        title: "Hana Shafi with It Begins with the Body",
        image: "./assets/events/FirstBook.jpg",
        imageAlt: "Hana Shafi with It Begins with the Body | Frizz Kid Art"
    },
    {
        title: "Hana Shafi in the Do You See What I See? Art Show",
        image: "./assets/events/DoYouSeeWhatISee2018-2.jpg",
        imageAlt: "Hana Shafi in the Do You See What I See? Art Show | Frizz Kid Art"
    },
    {
        title: "Frizz Kid Art painting at the Body Love Ball",
        image: "./assets/events/BodyLoveBallLivePainting.jpg",
        imageAlt: "Frizz Kid Art painting at the Body Love Ball | Frizz Kid Art"
    },
    {
        title: "Frizz Kid Art painting at the Nikki Minaj Live Painting",
        image: "./assets/events/NikkiMinajLivePainting.jpg",
        imageAlt: "Frizz Kid Art painting at the Nikki Minaj Live Painting | Frizz Kid Art"
    },
    {
        title: "Frizz Kid Art painting at the Grace Jones Live Painting",
        image: "./assets/events/GraceJonesLivePainting-2.jpg",
        imageAlt: "Frizz Kid Art painting at the Grace Jones Live Painting | Frizz Kid Art"
    },
    {
        title: "Frizz Kid Art painting at the Grace Jones Live Painting",
        image: "./assets/events/GraceJonesLivePainting.jpg",
        imageAlt: "Frizz Kid Art painting at the Grace Jones Live Painting | Frizz Kid Art"
    },
    {
        title: "Hana Shafi at an Amy Winehouse Live Painting Event",
        image: "./assets/events/AmyWinehousePainting2017-4.jpg",
        imageAlt: "Hana Shafi at an Amy Winehouse Live Painting Event | Frizz Kid Art"
    },
    {
        title: "Amy Winehouse Live Painting Event Finished Piece",
        image: "./assets/events/AmyWinehousePainting2017-3.jpg",
        imageAlt: "Amy Winehouse Live Painting Event Finished Piece | Frizz Kid Art"
    },
    {
        title: "Hana Shafi Playing Look-a-like with Amy Winehouse",
        image: "./assets/events/AmyWinehousePainting2017-2.jpg",
        imageAlt: "Hana Shafi Playing Look-a-like with Amy Winehouse | Frizz Kid Art"
    },
    {
        title: "Hana Shafi at an Amy Winehouse Live Painting Event",
        image: "./assets/events/AmyWinehousePainting2017.jpg",
        imageAlt: "Hana Shafi at an Amy Winehouse Live Painting Event | Frizz Kid Art"
    },
    {
        title: "Frizz Kid Art at Fan Expo 2017",
        image: "./assets/events/FanExpo2017-2.jpg",
        imageAlt: "Frizz Kid Art at Fan Expo 2017 | Frizz Kid Art"
    },
    {
        title: "Frizz Kid Art at Fan Expo 2017",
        image: "./assets/events/FanExpo2017.jpg",
        imageAlt: "Frizz Kid Art at Fan Expo 2017 | Frizz Kid Art"
    },
    {
        title: "Women Who Inspire Award 2017",
        image: "./assets/events/WomenWhoInspireAward2017.jpg",
        imageAlt: "Women Who Inspire Award 2017 | Frizz Kid Art"
    }
]

const commissionArray = [
    {
        title: "Second Poster Frizz Kid Art created for the Toronto Rape Crisis Center",
        image: "./assets/events/SecondPosterforTRCConTheSubway.jpg",
        imageAlt: "Second Poster Frizz Kid Art created for the Toronto Rape Crisis Center | Frizz Kid Art"
    },
    {
        title: "First Poster Frizz Kid Art created for the Toronto Rape Crisis Center",
        image: "./assets/events/FirstPosterforTRCConTheSubway.jpg",
        imageAlt: "First Poster Frizz Kid Art created for the Toronto Rape Crisis Center | Frizz Kid Art"
    },
    {
        title: "Program for AGO 2019 by Frizz Kid Art",
        image: "./assets/events/ProgramForAGO2019.jpg",
        imageAlt: "Program for AGO 2019 by Frizz Kid Art | Frizz Kid Art"
    },
    {
        title: "Frizz Kid Art Dare to Be Aware Campaign Art",
        image: "./assets/events/DareToBeAware-3.jpg",
        imageAlt: "Frizz Kid Art Dare to Be Aware Campaign Art | Frizz Kid Art"
    },
    {
        title: "Frizz Kid Art Dare to Be Aware Campaign Art",
        image: "./assets/events/DareToBeAware-2.jpg",
        imageAlt: "Frizz Kid Art Dare to Be Aware Campaign Art | Frizz Kid Art"
    },
    {
        title: "Frizz Kid Art Dare to Be Aware Campaign Art",
        image: "./assets/events/DareToBeAware.jpg",
        imageAlt: "Frizz Kid Art Dare to Be Aware Campaign Art | Frizz Kid Art"
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

const displayPatternGallery = () => {

    const patternImg = patternArray.map((post) => {
        return `<figure class="image-frame">
                    <img src="${post.image}" alt="${post.imageAlt}">
                    <figcaption>
                        <p>${post.title}</p>
                        <a href="${post.link}" class="store-link">See in Store!</a>
                    </figcaption>
                </figure>
        `
    })
    $(".pattern-gallery").append(patternImg)
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

const displayTattooGallery = () => {

    const tattooImg = tattooArray.map((post) => {
        return `<figure class="image-frame">
                    <img src="${post.image}" alt="${post.imageAlt}">
                    <figcaption>
                        <p>${post.title}</p>
                        <a href="${post.instaLink}" title="${post.instaTitle}"
                            class="instagram-link">
                            <img src="./assets/svg/instagram-black.svg" alt="Instagram Logo">
                            <span>${post.instaText}</span>
                        </a>
                    </figcaption>
                </figure>
        `
    })
    $(".tattoo-gallery").append(tattooImg)
}

const displayEventGallery = () => {

    const eventImg = eventArray.map((post) => {
        return `<figure class="image-frame">
                    <img src="${post.image}" alt="${post.imageAlt}">
                    <figcaption>
                        <p>${post.title}</p>
                    </figcaption>
                </figure>
        `
    })
    $(".event-gallery").append(eventImg)
}

const displayCommissionGallery = () => {

    const artImg = commissionArray.map((post) => {
        return `<figure class="image-frame">
                    <img src="${post.image}" alt="${post.imageAlt}">
                    <figcaption>
                        <p>${post.title}</p>
                    </figcaption>
                </figure>
        `
    })
    $(".art-gallery").append(artImg)
}
  


// * * * * IF THESE ARE ON THE PAGE DISPLAY THEM
// // SELECTED PHOTO FROM THUMBNAIL OPENS IN FEATURED PHOTO AREA\
const photoSwitch = function () {

    $('.select-featured-photo').click(function() {
        TweenMax.to($('.featured-item'), 0.5, {opacity: 1, display: 'block'});
        TweenMax.to($('.second-item'), 0.5, {opacity: 0});
        TweenMax.to($('.third-item'), 0.5, {opacity: 0});
    })

    $('.select-second-photo').click(function() {
        TweenMax.to($('.featured-item'), 0.5, {opacity: 0});
        TweenMax.to($('.second-item'), 0.5, {opacity: 1, display: 'block'});
        TweenMax.to($('.third-item'), 0.5, {opacity: 0});
    })

    $('.select-third-photo').click(function() {
        TweenMax.to($('.featured-item'), 0.5, {opacity: 0});
        TweenMax.to($('.second-item'), 0.5, {opacity: 0});
        TweenMax.to($('.third-item'), 0.5, {opacity: 1, display: 'block'});
    })
};

// * * * * INIT PIECES
init = function () {
    scroll();
    navMenu();
    photoSwitch();
    displayBlogPost();
    displayAffirmationGallery();
    displayPatternGallery();
    displayGeneralArtGallery();
    displayTattooGallery();
    displayEventGallery();
    displayCommissionGallery();
};

// * * * * DOCUMENT READY
$(() => {
    init();
}); // * * * * END OF DOCUMENT READY
