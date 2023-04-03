



// Text Slide in
let std_text = gsap.timeline({
  opacity: 0,
})
std_text.set('.std-text path', {
  opacity: 0,
  x: -1000,
})
std_text.to('.std-text path', {
  opacity: 1,
  duration: 1,
  x: 0,
  ease: "Bounce.easeOut",
  delay: "random(0, 1)",
})



// Blink Effect

let std_blink = gsap.timeline({
  repeat: -1,
  yoyo: true,
})
std_blink.to('.std-sparkles path', {
  opacity: 0,
  stagger: "random(0, .5)",
  delay: "random(0, 1)",
})


// Save the Date SVG FLOAT
let std__svg = gsap.timeline({
  repeat:-1,
  yoyo: true,

})

std__svg.to('.std__svg', {
  duration: .35,
  opacity: 1,
  ease: "bounce.easeIn",
  scale:1.025,
}, '+=3').to('.std__svg' , {
  rotation: 10,

},'+=1').to('.std__svg' , {
  rotation:-10,
})

