// document.querySelector(".menu-btn").addEventListener("click", e => {
//   document.querySelector("body").classList.toggle("open");
// });
// document.querySelector(".menu").addEventListener("click", e => {
//   if (e.target.tagName == "A") {
//     document.querySelector("body").classList.toggle("open");
//   }
// });
const tl = gsap.timeline({ defaults: { duration: 1 } });

tl.from(
  "header",
  {
    duration: 2,
    delay: 0,
    y: "-110%",
    ease: Expo.easeInOut
  },
  "-=0.1"
)
  .from(".ringOne", {
    duration: 4,
    delay: 0,
    opacity: 0,
    y: 180,
    ease: Expo.easeInOut
  })
  .from(
    ".ringTwo",
    4,
    {
      duration: 4,
      delay: 0.9,
      opacity: 0,
      y: 180,
      ease: Expo.easeInOut
    },
    "-=5"
  )
  .to(".ringOne", {
    duration: 4,
    delay: 0.4,
    x: 380,
    ease: Expo.easeInOut
  })
  .to(
    ".ringTwo",
    {
      duration: 4,
      delay: 0.9,
      x: 380,
      ease: Expo.easeInOut
    },
    "-=5"
  )

  .from(
    ".animate-in1",
    3,
    {
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    },
    "-=2.9"
  )
  .from(
    ".animate-in",
    3,
    {
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    },
    "-=1.9"
  )
  .to("main", 1, { display: "block" });

const htmlBar = document.querySelector(".bar-html");
const cssBar = document.querySelector(".bar-css");
const jsBar = document.querySelector(".bar-javascript");
const reactBar = document.querySelector(".bar-react");

const tl2 = gsap.timeline({ defaults: { duration: 1 } });
tl2
  .fromTo(
    htmlBar,
    0.75,
    { width: "calc(0% - 6px)" },
    { width: "calc(90% - 6px)", ease: Power4.easeOut }
  )
  .fromTo(
    cssBar,
    0.75,
    { width: "calc(0% - 6px)" },
    { width: "calc(87% - 6px)", ease: Power4.easeOut }
  )
  .fromTo(
    jsBar,
    0.75,
    { width: "calc(0% - 6px)" },
    { width: "calc(95% - 6px)", ease: Power4.easeOut }
  )
  .fromTo(
    reactBar,
    0.75,
    { width: "calc(0% - 6px)" },
    { width: "calc(80% - 6px)", ease: Power4.easeOut }
  );

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  triggerElement: ".skills-section",
  triggerHook: 0.2
})
  .setTween(tl2)
  .addTo(controller);

const navTl = new gsap.timeline({ paused: true });
navTl
  .to(".overlayer", {
    duration: 2,
    y: "100%",
    width: "100%",
    ease: Expo.easeInOut
  })
  .from(".nav-item", {
    duration: 2,
    x: -200,
    opacity: 0,
    stagger: 0.3,
    ease: Expo.easeInOut
  });
navTl.reverse();

document.querySelector(".menu-btn").addEventListener("click", e => {
  navTl.reversed() ? navTl.play() : navTl.reverse();
});
document.querySelector(".menu").addEventListener("click", e => {
  if (e.target.tagName == "A") {
    navTl.reversed() ? navTl.play() : navTl.reverse();
  }
});
