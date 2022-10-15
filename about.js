

gsap.registerPlugin(ScrollTrigger);
gsap.to('.fixed-circle',{
  opacity:.05,
scale:1.3,

  ease: Power2.out,
  scrollTrigger: {
  trigger: '.opening',
  start:'bottom +=1',


      }
    })
    gsap.to('.intro-wrapper .fa-circle',{
   y:"80vh",
   opacity:0,
    duration:3,
      ease: Power2.out,
      scrollTrigger: {
      trigger: '.intro-wrapper',
      start:'center center',
    

          }
        })
$(".snapshot-wrapper .card h3").each(function(index, element) {
  var count = $(this),
      zero = {val:0},
      num = count.data("count"),
      split = (num + "").split("."),
      decimals = split.length > 1 ? split[1].length : 0;

    gsap.to(zero, {
      val: num,
      duration: 5,
      scrollTrigger: element,
      onUpdate: function() {
        count.text(zero.val.toFixed(decimals));
      }
    });
});
$('.leadership-wrapper').on({
  mousemove: function(e) {
    $('.drag-indicator').css({
      left: e.pageX,
      top: e.pageY
    })
  },
  mousedown: function(e) {
    $('.drag-indicator').fadeOut(300)
  }
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3.2,
  spaceBetween: 30,
  infinite: true,
  reverseDirection:true,
  grabCursor: true,
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
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
}
//
//   Variables
//
//////////////////////////////////////////////////////////////////////

// Play with this value to change the speed
let tickerSpeed = 2;

let flickity = null;
let isPaused = false;
// const slideshowEl = document.querySelector('.js-slideshow');


//
//   Functions
//
//////////////////////////////////////////////////////////////////////

const update = () => {
  if (isPaused) return;
  if (flickity.slides) {
    flickity.x = (flickity.x - tickerSpeed) % flickity.slideableWidth;
    flickity.selectedIndex = flickity.dragEndRestingSelect();
    flickity.updateSelectedSlide();
    flickity.settle(flickity.x);
  }
 // window.requestAnimationFrame(update);
};

const pause = () => {
  isPaused = true;
};

const play = () => {
  if (isPaused) {
    isPaused = false;
    window.requestAnimationFrame(update);
  }
};


//
//   Create Flickity
//
//////////////////////////////////////////////////////////////////////

// flickity = new Flickity(slideshowEl, {
//   autoPlay: false,
//   prevNextButtons: true,
//   pageDots: false,
//   draggable: true,
//   wrapAround: true,
//   selectedAttraction: 0.015,
//   friction: 0.25
// });
// flickity.x = 0;
paceOptions = {
  ajax: true,
  document: true,
  eventLag: false,
  restartOnRequestAfter: false,
  restartOnPushState: false
};
Pace.on('done', function() {
  $('.p').delay(500).animate({
      top: '30%',
      opacity: '0'
  }, 3000, $.bez([0.19, 1, 0.22, 1]));


  $('#preloader').delay(1500).animate({
      top: '-100%'
  }, 2000, $.bez([0.19, 1, 0.22, 1]));


});

//
//   Add Event Listeners
//
//////////////////////////////////////////////////////////////////////

// slideshowEl.addEventListener('mouseenter', pause, false);
// slideshowEl.addEventListener('focusin', pause, false);
// slideshowEl.addEventListener('mouseleave', play, false);
// slideshowEl.addEventListener('focusout', play, false);

// flickity.on('dragStart', () => {
//   isPaused = true;
// });


//
//   Start Ticker
//
//////////////////////////////////////////////////////////////////////
// document.addEventListener('DOMContentLoaded', function(event) {

//   const cardsFront = document.querySelectorAll('.fflip-card-btn-turn-to-front');
//   cardsFront.forEach((card) =>{
//     card.style.visibility = 'visible';
//   })

//   const cardsBack = document.querySelectorAll('.flip-card-btn-turn-to-back');
//   cardsBack.forEach((card) =>{
//     card.style.visibility = 'visible';
//   })

//   cardsFront.forEach((card) =>{
//     card.onclick=()=>{
//       card.classList.toggle('do-flip');
//       console.log('i am clickable')
//     } 
//   });

//   cardsBack.forEach((card) =>{
//     card.onclick=()=>{
//       card.classList.toggle('do-flip');
//       console.log('i am clickable')
//     } 
//   })


// //   // document.getElementById('flip-card-btn-turn-to-back').style.visibility = 'visible';
// //   // document.getElementById('flip-card-btn-turn-to-front').style.visibility = 'visible';

// //   // document.getElementById('flip-card-btn-turn-to-back').onclick = function() {
// //   // document.getElementById('flip-card').classList.toggle('do-flip');
// //   // };

// //   // document.getElementById('flip-card-btn-turn-to-front').onclick = function() {
// //   // document.getElementById('flip-card').classList.toggle('do-flip');
// //   // };

//  });


const cardsFront = document.querySelectorAll('.flip-card-btn-turn-to-front');

cardsFront.forEach((card)=>{
 card.addEventListener('click', ()=>{
  console.log('I am clickable')
 })
})

update();
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
    xPercent: -100,
    ease: Power2.out
  });
  tl.from(image, 1.5, {
    xPercent: 100,
    scale: 1.3,
    delay: -1.5,
    ease: Power2.out
  });
});

// OLD WAY USING INTERSECTION OBSERVER API AND CLIP-PATH

/*const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.9
};

let revealCallback = (entries, self) => {
  entries.forEach(entry => {
    let container = entry.target;
    let img = entry.target.querySelector("img");
    const easeInOut = "power3.out";
    const revealAnim = gsap.timeline({ ease: easeInOut });

    if (entry.isIntersecting) {
      revealAnim.set(container, {
        visibility: "visible"
      });
      revealAnim.fromTo(
        container,
        {
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
          webkitClipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"
        },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1,
          ease: easeInOut
        }
      );
      revealAnim.from(img, 4, {
        scale: 1.4,
        ease: easeInOut,
        delay: -1
      });
      self.unobserve(entry.target);
    }
  });
};

let revealObserver = new IntersectionObserver(revealCallback, options);

document.querySelectorAll(".reveal").forEach(reveal => {
  revealObserver.observe(reveal);
});

*/
//gsap.registerPlugin(scrollTrigger);

let ta = gsap.timeline({
    scrollTrigger: {
        trigger: '.container',
        scrub: true,
        pin: true,
    }
});

ta.timeScale(5);
ta.from(".row1",{x:-1000, duration:1.5})
  .from(".row2",{x:1000, duration:1.5}, .2)
  .from(".row3",{x:-1000, duration:1.5}, .2)


/*
gsap.to(".container", {
  scrollTrigger: {
    trigger: ".container",
    scrub: true
  }
  x:400,
  duration: 3
});*/
gsap.registerPlugin(ScrollTrigger);
// REVEAL //
gsap.utils.toArray(".revealUp").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    start: "top 80%",
    end: "bottom 20%",

    onEnter: function () {
      gsap.fromTo(
        elem,
        { y: 150, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeave: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
    onEnterBack: function () {
      gsap.fromTo(
        elem,
        { y: -150, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeaveBack: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    }
  });
});
$('.leadership-wrapper figure ').on({
  mousemove: function(e) {
    $('.drag-indicator').css({
      left: e.pageX,
      top: e.pageY
    })
  },
  mousedown: function(e) {
    $('.drag-indicator').fadeOut(300)
  }
})