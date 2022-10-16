gsap.registerPlugin(ScrollTrigger);

let revealContainers = document.querySelectorAll(".reveal");

revealContainers.forEach((container) => {
  let image = container.querySelector("img");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      toggleActions: "restart none none reset"
    }
  });

  tl.set(container, { autoAlpha: 1 });
  tl.from(container, 1.5, {
    xPercent: -20,
    ease: Power2.out
  });
  tl.from(image, 1.5, {
    xPercent: 50,
    scale: 1.3,
    delay: -1.5,
    ease: Power2.out
  });
});
gsap.from(".greeting .fa-circle ", {duration: 2,pin:true, scale: 250});


gsap.from(".greeting .word ", {duration: 1,delay:2, opacity: 0});
gsap.from(".hi-div", {duration: 1,delay:2.1, opacity: 0});
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.batch(".partners-box .circle", {
  toggleActions: "restart none none reset",
  onEnter: elements => {
    gsap.from(elements, {
      autoAlpha: 0,
      opacity:0,
      x: 800,
      stagger: 0.2,
      duration:1.5,
      pin:true,
    });
  },
});
gsap.from('.video',{
  opacity:.5,
scale:.5,
  ease: Power2.out,
  scrollTrigger: {
  trigger: '.team-wrapper',
  start: "top 20%",
    end: "bottom 80%",
duration:1,
pin:true,
      }
    })
    gsap.from('.project',{
    
    scale:.8,
    
      ease: Power2.out,
      scrollTrigger: {
      trigger: '.projects',
      start: "top 20%",
        end: "bottom 80%",
    
    
          }
        })








var toggleBtn = document.querySelector(".toggleBtn");
var menu = document.querySelector(".menu");
var tl= new TimelineMax({paused:true});
tl.to(".menu-icon", 1.6,{
  opacity:0,
  rotation:180,
})
tl.to(".close-icon", 1.6,{
 opacity:1,
 rotation:180,
}, "-=0.9")
tl.to(".menu", 1.6,{
 scale :1,

},"-=1")
tl.from(".menu li", 1.6,{
 opacity:0,
 x:-100, 
 stagger:.4,
})
tl.reverse();
toggleBtn.onclick = function(){
 tl.reversed(!tl.reversed())
 console.log('I am clickable')
}