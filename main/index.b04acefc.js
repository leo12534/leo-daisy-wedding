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
}
let images = document.querySelectorAll(".main__hero-picture");
images.forEach((image)=>{
    let mainImg = image.querySelectorAll(".main__hero-img");
    let tl = gsap.timeline().to(image, {
        yPercent: gsap.utils.random(-20, 20),
        scale: gsap.utils.random(1, 1.025),
        padding: "0px"
    });
    ScrollTrigger.create({
        trigger: "#hero__images",
        start: "center center",
        end: "bottom center",
        scrub: 1,
        toggleActions: "restart play pause resume reset",
        animation: tl
    });
});
// About Content Animation
// const panelSlideIn = gsap.timeline({
//   paused: true,
//   defaults: { ease: "back" },
//   scrollTrigger: {
//     trigger: ".flower__separator",
//     start: "top top",
//     onEnter: () => {
//       panelSlideIn.play();
//     },
//     onEnterBack: () => {
//       panelSlideIn.reverse();
//     }
// } });
// panelSlideIn
//   .from('.intro__image-wrapper', { autoAlpha: 0, scale: 0, y: 20, duration: 0.95 }, 0)
//   .from('.intro__content-wrapper', { autoAlpha: 0, x: 50, duration: 0.64 }, 0.04)
// About Image Skew Hover
let introImageDiv = document.querySelector(".intro__image");
introImageDiv.addEventListener("mousemove", function(e) {
    var width = introImageDiv.offsetWidth;
    var height = introImageDiv.offsetHeight;
    console.log(e.clientX);
    positionX = e.clientX / width - 0.55;
    positionY = e.clientY / height - 0.55;
    gsap.to(".intro__image", {
        rotationY: positionX * 15,
        rotationX: -positionY * 10,
        ease: "back"
    });
    gsap.from("html", {
        "--border-after-left": 0
    });
});
window.addEventListener("load", function(event) {
    init(); //do stuff
});

//# sourceMappingURL=index.b04acefc.js.map
