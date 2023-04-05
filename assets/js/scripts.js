
// Ring Bounce
let ring = gsap.timeline()
ring.from('.ring__svg', {
  opacity: 0,
  y: -200,
  ease: "bounce.out",
  scale: 2,
  duration: 1.2,
  delay:.8,
}).fromTo(".ring__svg",
  {
    y: -2,
    ease: "ease.out",
    scale: 1.2,
    duration: 2,
  },
  {
    rotate: -15,
    repeat: 4,
    yoyo:true,
    ease: "ease.in",
    duration:.2,
  }, ">-1");

// Images - Scroll Trigger
let images = gsap.utils.toArray(".main__hero-picture");
images.forEach((img) => {
  gsap.set(img, {
    y: 1000,

  })
  gsap.to(img, {
    delay:gsap.utils.random(.2, .6),
    y: 0,
    ease: "bounce.in",

  })
  gsap.to(img, {
    yPercent: gsap.utils.random(5, -25),
    scale: gsap.utils.random(1, 1.025),

    scrollTrigger: {
      trigger: img,
      start: '55% center',
      end: 'top center',
      scrub:-2,
      toggleActions:'restart play pause resume reset'
    }
  })
})


// STD Sign Shake
const std = gsap.timeline({ repeat: -1, repeatDelay:.2, delay:3});
std.to(".std__svg", {
  y: 8, duration: 0.7
}, "icon").to(".std__svg", {
  y: 0, duration: 0.7
}, "icon+=0.7");


let stdSparkles = gsap.utils.toArray(".std-sparkles path");
stdSparkles.forEach((sparkle) => {
  let tl = gsap.timeline()
  tl.fromTo(sparkle, {
    autoAlpha: 0,
  }, {
    autoAlpha: 1,
    repeat: -1,
    yoyo: true,
    duration:.7,
    delay:gsap.utils.random(0, 1.5),
  })
})

// Intro Animation

const panelSlideIn = gsap.timeline({ paused: true, defaults: { ease: "expo.out" } });
panelSlideIn
  .from('.intro__image-wrapper', { autoAlpha: 0, scale: 0, y: 20, duration: 0.95 }, 0)
  .from('.intro__content-wrapper', { autoAlpha: 0, x: 50, duration: 0.64 }, 0.04)

ScrollTrigger.create({
  trigger: ".intro__trigger",
  start: "-85% top",
  markers:true,
  end: "300px bottom",
  onEnter: () => {
    panelSlideIn.play();
  },
  onEnterBack: () => {
    panelSlideIn.reverse();
  }
});




