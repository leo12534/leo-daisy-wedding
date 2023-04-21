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
        scale: 0.5,
        y: 1000,
        duration: 0.5
    }, ".2").from("#hero__bottom-curve", {
        autoAlpha: 1,
        borderTopLeftRadius: "0px",
        borderTopRightRadius: "0px",
        duration: 1
    }).from(".hero__heading", {
        y: 120,
        scale: 0,
        duration: 0.8
    }).from(".main__hero-picture", {
        y: 500,
        duration: 0.85,
        stagger: {
            each: 0.2,
            from: "random"
        }
    }).from(".hero__dates", {
        yPercent: 20,
        ease: "elastic.out",
        scale: 0.5,
        duration: 1
    }).from(".ring__svg", {
        opacity: 1,
        autoAlpha: 0,
        yPercent: -100,
        ease: "bounce.out",
        scale: 1.5,
        duration: 1
    }, "<=1").from(".ring__svg", {
        opacity: 1,
        rotate: -25,
        repeat: 6,
        yoyo: true,
        duration: 0.1
    }, "<").from(".hero__venue", {
        x: -80,
        duration: 1
    }, "<").from("#intro__section", {
        autoAlpha: 0,
        yPercent: -20,
        duration: .75
    }, "<");
}
// Images Move On Scroll
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
// Make Images Move Slowly and stuff
let floatingImages = document.querySelectorAll("#intro__section img");
let container = document.querySelector("#intro__section");
let client = container.getBoundingClientRect();
container.addEventListener("mousemove", (e)=>{
    let clientY = client.y;
    let mouseX = e.x;
    let mouseY = Math.abs(e.y - clientY);
    let hh = window.innerHeight;
    let ww = window.innerWidth;
    floatingImages.forEach((img)=>{
        let direction = img.dataset.direction;
        let multiplier = img.dataset.multiplier;
        let tx = direction == "right" ? -1 : 1;
        gsap.to(img, {
            duration: 3,
            ease: "back.out",
            x: tx * (mouseX - ww / 2) / multiplier * 2,
            y: tx * (mouseY - hh / 2) / multiplier
        });
    });
});
// Footer Hearth Pulse
let heartPulse = gsap.timeline({
    defaults: {
        transformOrigin: "50% 50%",
        ease: "back"
    }
});
heartPulse.to(".svg__footer .heart", {
    scale: 1.25,
    y: 3,
    repeat: -1,
    yoyo: true
});
ScrollTrigger.create({
    trigger: "main",
    start: "80% center",
    end: "82% center",
    toggleActions: "restart play pause resume reset",
    animation: heartPulse
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
        introSection.style.paddingTop = `${middleHeroImgHeight / 3.75}px`;
        introSection.style.paddingBottom = `${middleHeroImgHeight / 7.75}px`;
    } else if (xMedium.matches) {
        introSection.style.paddingTop = `${middleHeroImgHeight / 2.75}px`;
        introSection.style.paddingBottom = `${middleHeroImgHeight / 5.75}px`;
    } else if (xLarge.matches) {
        introSection.style.paddingTop = `${middleHeroImgHeight / 3}px`;
        introSection.style.paddingBottom = `${middleHeroImgHeight / 6}px`;
    } else if (xxLarge.matches) {
        introSection.style.paddingTop = `${middleHeroImgHeight / 3}px`;
        introSection.style.paddingBottom = `${middleHeroImgHeight / 6}px`;
    } else {
        introSection.style.paddingTop = `${middleHeroImgHeight / 2}px`;
        introSection.style.paddingBottom = `${middleHeroImgHeight / 4}px`;
    }
}
window.addEventListener("load", function(event) {
    introSectionTopPadding();
    init();
});
window.addEventListener("resize", function(event) {
    introSectionTopPadding();
});
document.body.scrollTop = document.documentElement.scrollTop = 0;

//# sourceMappingURL=index.f4cb73f5.js.map
