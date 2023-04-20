gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline({
    defaults: {
        opacity: 0,
        ease: "back.out(1.7)"
    }
});
function init() {
    tl.from("#hero__wrapper", {
        autoAlpha: 0,
        scale: 0.8,
        y: 1000,
        duration: 0.5
    }, ".25").from(".main__hero-picture", {
        y: 500,
        stagger: {
            each: 0.2,
            from: "random"
        }
    }).from(".ring__svg", {
        opacity: 1,
        autoAlpha: 0,
        yPercent: -100,
        ease: "bounce.out",
        scale: 1.5,
        duration: 1
    }).from(".ring__svg", {
        opacity: 1,
        rotate: -25,
        repeat: 6,
        yoyo: true,
        duration: 0.1
    }, "<").from(".hero__heading", {
        x: 80,
        duration: 1
    }, "<").from(".hero__venue", {
        x: -80,
        duration: 1
    }, "<").from(".hero__dates", {
        yPercent: 20,
        ease: "elastic.out",
        scale: 0.5
    }).from(".std__svg", {
        scale: 0,
        duration: 0.25
    }, "<1.5").from(".std-sparkles path", {
        duration: .15,
        yoyo: true,
        stagger: {
            amount: 2,
            from: "random",
            repeat: 10,
            repeatDelay: 1,
            yoyo: true
        }
    });
// .to('#intro__section', {
//     autoAlpha:1,
// })
}
let images = document.querySelectorAll(".main__hero-picture");
images.forEach((image)=>{
    let mainImg = image.querySelectorAll(".main__hero-img");
    let tl = gsap.timeline().to(image, {
        yPercent: gsap.utils.random(-10, -5),
        scale: gsap.utils.random(1, 1.02),
        padding: "4px"
    });
    ScrollTrigger.create({
        trigger: "#hero__images",
        start: "center center",
        end: "bottom center",
        scrub: 2,
        toggleActions: "restart play pause resume reset",
        animation: tl
    });
});
// About Content Animation
// const panelSlideIn = gsap.timeline({
//   paused: true,
//   defaults: { ease: "back" },
//   scrollTrigger: {
//     trigger: "#intro__section",
//     start: "top top",
//     end:"80% top",
//     markers: true,
//     onEnter: () => {
//       panelSlideIn.play();
//     },
//     onEnterBack: () => {
//       panelSlideIn.reverse();
//     },
//   },
// });
// panelSlideIn
//   .from('.intro__trigger', {autoAlpha:0, scale:0,y :-20, duration:.2})
//   .from('.intro__image-wrapper', { autoAlpha: 0,  x: -200, duration: 0.8 }, 0)
//   .from('.intro__content-wrapper', { autoAlpha: 0, x: 50, duration: 0.55 }, 0.04)
window.addEventListener("load", function(event) {
    introSectionTopPadding();
    init(); // start hero animation
});
window.addEventListener("resize", function(event) {
    introSectionTopPadding();
});
function introSectionTopPadding(e) {
    var xSmall = window.matchMedia("(max-width: 767.98px)");
    var xMedium = window.matchMedia("(max-width: 991.98px)");
    var xLarge = window.matchMedia("(max-width: 1199.98px)");
    var xxLarge = window.matchMedia("(max-width: 1399.98px)");
    const middleHeroImg = document.querySelector("#hero__images");
    const middleHeroImgHeight = middleHeroImg.offsetHeight.toString();
    let introSection = document.querySelector("#intro__section");
    if (xSmall.matches) {
        introSection.style.paddingTop = `${middleHeroImgHeight / 6}px`; // Set Padding depening on size of intro section
        introSection.style.paddingBottom = `${middleHeroImgHeight / 12}px`; // Set Padding depening on size of intro section
    } else if (xMedium.matches) {
        introSection.style.paddingTop = `${middleHeroImgHeight / 4}px`; // Set Padding depening on size of intro section
        introSection.style.paddingBottom = `${middleHeroImgHeight / 8}px`; // Set Padding depening on size of intro section
    } else if (xLarge.matches) {
        introSection.style.paddingTop = `${middleHeroImgHeight / 3}px`; // Set Padding depening on size of intro section
        introSection.style.paddingBottom = `${middleHeroImgHeight / 6}px`; // Set Padding depening on size of intro section
    } else if (xxLarge.matches) {
        introSection.style.paddingTop = `${middleHeroImgHeight / 3}px`; // Set Padding depening on size of intro section
        introSection.style.paddingBottom = `${middleHeroImgHeight / 6}px`; // Set Padding depening on size of intro section
    } else {
        introSection.style.paddingTop = `${middleHeroImgHeight / 2}px`; // Set Padding depening on size of intro section
        introSection.style.paddingBottom = `${middleHeroImgHeight / 4}px`; // Set Padding depening on size of intro section
    }
}

//# sourceMappingURL=index.f4cb73f5.js.map
