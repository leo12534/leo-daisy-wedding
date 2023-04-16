gsap.registerPlugin(ScrollTrigger);
let images = document.querySelectorAll(".main__hero-picture");

function heroIntro() {
  const tl = gsap
    .timeline()
    .fromTo('#hero__wrapper', {
      opacity: 0,
      scale: .2,
      borderRadius: '50%',
    },
    {
      opacity: 1,
      scale:1,
      duration:2,
      ease:"back.out(1)",
      borderRadius: '0%',
      })
    .to(images, {
      x:200,
    })
  return tl
}


// function heroImgs() {
//   images.forEach(function (img, index) {
//     const tl = gsap
//       .timeline()
//       .to(img, {
//         x:200,
//       })
// hero.add(heroImgs())
//   })
// }
window.addEventListener('load', function (event) {
const hero = gsap.timeline();
hero.add(heroIntro())
// hero.add(heroImgs())
})

// hero.add(ringBounce())
// hero.add(imgsScroll())

// OLD SHITTT

// function ringBounce() {
//   let tl = gsap.timeline()
//   tl.from('.ring__svg', {
//     opacity: 0,
//     y: -200,
//     ease: "bounce.out",
//     scale: 1.5,
//     duration: 1.2,
//     delay:.8,
//   }).fromTo(".ring__svg",
//     {
//       y: -2,
//       ease: "ease.out",
//       scale: 1.2,
//       duration: 2,
//     },
//     {
//       rotate: -15,
//       repeat: 4,
//       yoyo:true,
//       ease: "ease.in",
//       duration:.2,
//     }, ">-1");
//   return tl
// }

// function imgsScroll() {
//   let tl = gsap.timeline({
//      scrollTrigger: {
//           trigger: '#main__hero-images',
//           start: '35% top',
//           end: 'bottom top',
//           markers:true,
//           scrub: -5,
//           toggleActions:'restart play pause resume reset'
//         }
//     });
//   tl.to('.main__hero-picture', {
//         yPercent: function(i, elem, boxes) {
//           return i % 2 === 0 ? -25 : 5;
//     },
//         delay:gsap.utils.random(1,2),
//         scale: gsap.utils.random(1, 1.015),
//   })
//   return tl
// }




// Fade in - Start TL


// Ring Bounce


// Images - Scroll Trigger
// let images = gsap.utils.toArray(".main__hero-picture");
// images.forEach((img) => {
//   gsap.set(img, {
//     y: 1000,

//   })
//   gsap.to(img, {
//     delay:gsap.utils.random(.2, .6),
//     y: 0,
//     ease: "bounce.in",
//   })
//   gsap.to(img, {
//     yPercent: gsap.utils.random(5, -25),
//     scale: gsap.utils.random(1, 1.025),

//     scrollTrigger: {
//       trigger: img,
//       start: '55% center',
//       end: 'top center',
//       scrub:-2,
//       toggleActions:'restart play pause resume reset'
//     }
//   })
// })


// STD Sign Shake
// const std = gsap.timeline({ repeat: -1, repeatDelay:.2, delay:3});
// std.to(".std__svg", {
//   y: 8, duration: 0.7
// }, "icon").to(".std__svg", {
//   y: 0, duration: 0.7
// }, "icon+=0.7");


// let stdSparkles = gsap.utils.toArray(".std-sparkles path");
// stdSparkles.forEach((sparkle) => {
//   let tl = gsap.timeline()
//   tl.fromTo(sparkle, {
//     autoAlpha: 0,
//   }, {
//     autoAlpha: 1,
//     repeat: -1,
//     yoyo: true,
//     duration:.7,
//     delay:gsap.utils.random(0, 1.5),
//   })
// })


