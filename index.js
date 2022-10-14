gsap.registerPlugin(ScrollTrigger);

const prices = gsap.utils.toArray('.fixed-circle');

prices.forEach(price => {
gsap.to(price, { 
  backgroundColor:'#0077b6', duration:1,delay:1,
  scale: 1.1, 
    repeat:-1, 
    yoyo: true,
    scrollTrigger: {
    
      trigger: ".vision-box",
      start:'top 70%',

 
     
    }
  })
})



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
    
$(document).ready(function() {
  new CircleType(document.querySelector('.team-wrapper h1'))
    .radius(100);
});
var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 500;	// Time Between Switch
	 
// Image List
images[0] = "./muriel2-removebg-preview.png";
images[1] = "./tshenolo-removebg-preview.png";
images[2] = "./Thandi-one-removebg-preview (1).png";
images[3] = "./shudu2-removebg-preview.png";
images[4] = "./tsiko-removebg-preview.png";
images[5] = "./masi-removebg-preview (1) (1).png";
images[6] = "./phindile-removebg-preview (2).png";
images[7] = "./njabulo-removebg-preview.png";
images[8] = "./lunga-one-removebg-preview (1).png";
images[9] = "./james-removebg-preview (1) (1).png";



// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;
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
        { y: 300, opacity:0,autoAlpha: 0 },
        {
          duration: 1.5,
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
        { y: -100, autoAlpha: 0 },
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


gsap.registerPlugin(ScrollTrigger);





 gsap.to('.fixed-circle',{
  opacity:.0,


  ease: Power2.out,
  scrollTrigger: {
  trigger: '.partners-box',
  start:'top 80%',
  end:"bottom 20%",

pinSpacing:false,

      }
    }) 

gsap.registerPlugin(ScrollTrigger);

/*    gsap.to('.fixed-circle',{
      opacity:0,
 
    
      ease: Power2.out,
      scrollTrigger: {
      trigger: '.vision-box',
      start: "top 85%",
      end: "bottom 20%",
    
          }
        })*/ 
  
    
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
//game
// USEFUL FUNCTIONS
	/*<!



[CDATA[*/
  /*  function play() {
		function angle(elem) {
			var st = window.getComputedStyle(elem, null);
			var tr = st.getPropertyValue("-webkit-transform") || st.getPropertyValue("-moz-transform") || st.getPropertyValue("-ms-transform") || st.getPropertyValue("-o-transform") || st.getPropertyValue("transform") || "fail";
			var values = tr.split("(")[1].split(")")[0].split(",");
			var a = values[0];
			var b = values[1];
			var c = values[2];
			var d = values[3];
			var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
			if (angle < 0) {
				angle += 360
			}
			return angle
		}
		var colors = ["#ea4335", "#000000", "#ffffff", "#4285f4", "#34a853", "#fbbc05"];
		var _ea4335 = 7.5,
			_000000 = 17.5,
			_ffffff = 27.5,
			_4285f4 = 37.5,
			_34a853 = 47.5,
			_fbbc05 = 57.5;
		const ball = document.querySelector(".ball");

		const ballBoard = document.querySelector(".container");

		const board = document.querySelector(".border");

		const right = document.querySelector(".right");

		const left = document.querySelector(".left");
		const scorepin = document.querySelector(".score h1");
		const gameOver = document.querySelector(".game-over");
		gameOver.style.display = "none";
		const feedPlace = document.querySelector(".game-over p");
		var borderRotate = angle(board);
		window.addEventListener("keydown", function(e) {
			if (e.keyCode == 39) {
				borderRotate += 60;
				board.style.transform = "rotate(" + borderRotate + "deg)";
				ballBoard.style.transform = "rotate(" + (-borderRotate) + "deg)"
			} else {
				if (e.keyCode == 37) {
					borderRotate -= 60;
					board.style.transform = "rotate(" + borderRotate + "deg)";
					ballBoard.style.transform = "rotate(" + (-borderRotate) + "deg)"
				}
			}
		});
		right.addEventListener("click", function() {
			borderRotate += 60;
			board.style.transform = "rotate(" + borderRotate + "deg)";
			ballBoard.style.transform = "rotate(" + (-borderRotate) + "deg)"
		});
		left.addEventListener("click", function() {
			borderRotate -= 60;
			board.style.transform = "rotate(" + borderRotate + "deg)";
			ballBoard.style.transform = "rotate(" + (-borderRotate) + "deg)"
		});

		function check() {
			var n = Math.floor(borderRotate / 360),
				downColor = (borderRotate / 6) - (60 * n),
				background = window.getComputedStyle(ball, null).getPropertyValue("background-color");
			bottom = parseInt(window.getComputedStyle(ball, null).getPropertyValue("bottom"));
			background = background.split("(")[1].split(")")[0].split(", ");
			var c1 = parseInt(background[0]).toString(16),
				c2 = parseInt(background[1]).toString(16),
				c3 = parseInt(background[2]).toString(16);
			if (c1.length < 2) {
				c1 = "0" + c1
			}
			if (c2.length < 2) {
				c2 = "0" + c2
			}
			if (c3.length < 2) {
				c3 = "0" + c3
			}
			console.log(c1.length, c2.length, c3.length);
			var color = c1 + c2 + c3;
			var value = eval("_" + color);
			if (bottom == 0) {
				if (value != downColor) {
					clearInterval(3);
					clearInterval(4);
					clearInterval(2);
					clearInterval(1);
				gameOver.style.display = "block";
        board.style.opacity = "0"; 
   
					ball.style.bottom = "-20px";
					var feedback, overScore = parseInt(scorepin.innerHTML);
					if (overScore <= 50) {
						feedback = "Your score is " + overScore + ""
					} else {
						if (overScore > 50 || overScore <= 150) {
							feedback = "Your score is " + overScore + ""
						}
					}
					feedPlace.innerHTML = feedback
				}
			}
		}
		var score = 0;
		scorepin.innerHTML = score;

		function addPoint() {
			score += 1;
			scorepin.innerHTML = score
		}

		function bg() {
			var rand = Math.floor(Math.random() * 6);
			ball.style.background = colors[rand]
		}

		function jump() {
			ball.classList.toggle("ball-down")
		}
		setInterval(check, 1);
		setInterval(bg,1500);
		setInterval(jump, 750);
		setInterval(addPoint, 1500)
	}
	const start = document.querySelector(".start");
	start.addEventListener("click", function() {
  const board = document.querySelector(".border");
 board.style.opacity = "1"; 
 start.style.opacity = "0"; 
		play();
		this.style.display = "none";
	});
	const replay = document.querySelector(".game-over button");
replay.addEventListener("click", function() {
    play();

    const board = document.querySelector(".border");
    board.style.opacity = "1"; 
    start.style.opacity = "0"; 
    
       this.style.display = "none";
	}); */ 
	 /*]]>*/
//GAMING Function

gsap.registerPlugin(ScrollTrigger);



 
document.querySelectorAll('.js-ticker').forEach(ticker => {
  
    var speed = 50;
  
    $('.js-ticker li').wrapAll('<span class="ticker-items">');
    
    var tickerWidth = $('ul').width();
    tickerItemsWidth = $('.ticker-items').eq(0).width();
    
    var spanWidth = $('.js-ticker span').width();
    
    $('.js-ticker span').eq(0).clone().appendTo('.js-ticker');
    $('.js-ticker span').eq(0).clone().appendTo('.js-ticker');
    $('.js-ticker span').wrapAll('<span class="ticker-wrapper">');
    
    var tickerWraper = '.ticker-wrapper';
    var transformX;
    var progressX;
    gsap.set( '.ticker-wrapper' , {x: -tickerItemsWidth } );
    var wrapWidth = tickerItemsWidth * 3;
   
    var initDuration = tickerWidth/speed;
    var loopDuration = spanWidth/speed;
    var tl = gsap.timeline({repeat:-1});
    
        tl.to( tickerWraper , 0 , { 
          x: -tickerItemsWidth,  
          ease: "none" 
        } );
        tl.to( tickerWraper , loopDuration , { 
          x: -tickerItemsWidth * 2, 
          ease:  "none",
          onUpdate: function(){
             // console.log('onUpdate= ', tl.progress());
          }
        } );
    
    const draggable = new Draggable(tickerWraper, {
      type:"x",
      trigger: ".js-ticker",
      throwProps: true,
      onPressInit: function() {
        tl.pause();
      },
      onDrag: function() {
        transformX = (this.x + tickerItemsWidth) % tickerItemsWidth;
        progressX = -transformX / tickerItemsWidth;
        if ( progressX < 0 || progressX === 1 ) {
          progressX = 1 + (progressX % 1);
        } else {
          progressX = 0 + (progressX % 1);
        }
        tl.progress(progressX);
      },
      onThrowUpdate: function(){
        transformX = (this.x + tickerItemsWidth) % tickerItemsWidth;
        progressX = -transformX / tickerItemsWidth;
        if ( progressX < 0 || progressX === 1 ) {
          progressX = 1 + (progressX % 1);
        } else {
          progressX = 0 + (progressX % 1);
        }
  
        tl.progress(progressX);
      },
      onThrowComplete: function() {
        tl.play();
       gsap.fromTo(tl, 1, {timeScale:0}, {timeScale:2, ease:"none"});
      },
  
    });
   });
   document.querySelectorAll('.js-ticke').forEach(ticker => {
  
    var speed = 50;
  
    $('.js-ticke li').wrapAll('<span class="ticker-items">');
    
    var tickerWidth = $('ul').width();
    tickerItemsWidth = $('.ticke-items').eq(0).width();
    
    var spanWidth = $('.js-ticker span').width();
    
    $('.js-ticke span').eq(0).clone().appendTo('.js-ticke');
    $('.js-ticke span').eq(0).clone().appendTo('.js-ticke');
    $('.js-ticke span').wrapAll('<span class="ticker-wrapper">');
    
    var tickerWraper = '.ticker-wrapper';
    var transformX;
    var progressX;
    gsap.set( '.ticker-wrapper' , {x: -tickerItemsWidth } );
    var wrapWidth = tickerItemsWidth * 3;
   
    var initDuration = tickerWidth/speed;
    var loopDuration = spanWidth/speed;
    var tl = gsap.timeline({repeat:-1});
    
        tl.to( tickerWraper , 0 , { 
          x: -tickerItemsWidth,  
          ease: "none" 
        } );
        tl.to( tickerWraper , loopDuration , { 
          x: -tickerItemsWidth * 2, 
          ease:  "none",
          onUpdate: function(){
             // console.log('onUpdate= ', tl.progress());
          }
        } );
    
    const draggable = new Draggable(tickerWraper, {
      type:"x",
      trigger: ".js-ticke",
      throwProps: true,
      onPressInit: function() {
        tl.pause();
      },
      onDrag: function() {
        transformX = (this.x + tickerItemsWidth) % tickerItemsWidth;
        progressX = -transformX / tickerItemsWidth;
        if ( progressX < 0 || progressX === 1 ) {
          progressX = 1 + (progressX % 1);
        } else {
          progressX = 0 + (progressX % 1);
        }
        tl.progress(progressX);
      },
      onThrowUpdate: function(){
        transformX = (this.x + tickerItemsWidth) % tickerItemsWidth;
        progressX = -transformX / tickerItemsWidth;
        if ( progressX < 0 || progressX === 1 ) {
          progressX = 1 + (progressX % 1);
        } else {
          progressX = 0 + (progressX % 1);
        }
  
        tl.progress(progressX);
      },
      onThrowComplete: function() {
        tl.play();
       gsap.fromTo(tl, 1, {timeScale:0}, {timeScale:2, ease:"none"});
      },
  
    });
   });
 




   $('#button').on('click', function() {
	toggleParticleColor();
	
});
function toggleParticleColor() {
	$('#particles-js').addClass('toggle-color');
	$('#button').addClass('toggle-color');
 	const newColor = '#1b1b1b';
	$.each(pJSDom[0].pJS.particles.array, function(i,p){
		pJSDom[0].pJS.particles.array[i].color.value = newColor;
		pJSDom[0].pJS.particles.array[i].color.rgb = hexToRgb(newColor);
		pJSDom[0].pJS.particles.line_linked.color_rgb_line = hexToRgb(newColor);
	});
}

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 60,
      "density": {
        "enable": true,
        "value_area":500
      }
    },
    "color": {
      "value": "#1b1b1b"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#1b1b1b"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.8,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 180,
      "color": "#1b1b1b",
      "opacity": 0.08,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 79.91497047141839,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});var count_particles, stats, update;
// stats = new Stats; stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() { stats.begin(); stats.end();
if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { 		 count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; 
} requestAnimationFrame(update); }; requestAnimationFrame(update);;
let cwWidth = document.querySelector(".card-wrapper").offsetWidth;

// desired effect, but needs to be seamless
gsap.timeline({
    repeat: -1,
    defaults: {
      ease: "none",
    },
  })
  .fromTo(
    ".card",
    {
      x: (i, el) => cwWidth * (i)
    },
    {
      x: (i, el, t) => -cwWidth * (t.length - i ),
      ease: "none",
      duration: 6,
    }
  );
  
  const boxes = gsap.utils.toArray('.box');

// Set things up
gsap.set(boxes, {autoAlpha: 0, y: 80});

boxes.forEach((box, i) => {
  // Set up your animation
  const anim = gsap.to(box, {duration: 1, autoAlpha: 1, y: 0, paused: true});
  
  // Use callbacks to control the state of the animation
  ScrollTrigger.create({
    trigger: box,
    end: "bottom bottom",
    once: true,
    onEnter: self => {
      // If it's scrolled past, set the state
      // If it's scrolled to, play it
      self.progress === 1 ? anim.progress(1) : anim.play()
    }
  });
});

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
TweenMax.from("#button", 3, {
  delay: 1,
  scale: 4,
  opacity: 0,
  stagger: .1,
  ease: Expo.easeInOut
})
//ANIMATIONS
var   w = 1000,
      h =  800,
      circleWidth = 5; 
 

var palette = {
      "lightgray": "#E5E8E8",
      "gray": "#708284",
      "mediumgray": "#536870",
      "blue": "#3B757F"
  }

var colors = d3.scale.category20();

var nodes = [
      { name: "Skills"},
      { name: "HTML5", target: [0], value: 58 },
      { name: "CSS3", target: [0, 1], value: 65 },  
      { name: "Scss", target: [0, 1, 2], value: 52 },
      { name: "Compass", target: [0, 3], value: 48 }, 
      { name: "Susy", target: [0,3,4], value: 40 }, 
      { name: "Breakpoints", target: [0,3,4,5], value: 36 },
      { name: "jQuery", target: [0, 1, 2], value: 52 },
      { name: "Javascript", target: [0, 1, 2, 8], value: 42 },
      { name: "PHP", target: [0,1,2], value: 35 },
      { name: "Wordpress", target: [0,1,2,3,9], value: 67 },
      { name: "Git", target: [0,1,2,3,4,5,6,7,8,10], value: 68 },
      { name: "Snap.svg", target: [0,1,2,7,8 ], value: 16 },
      { name: "d3", target: [0,1,2,7,8], value: 25 },
      { name: "Gulp", target: [0,1,2,3,4,5,6,7,8,9,10,11,12], value: 45 },
      { name: "AngularJS", target: [0,1,2,7,8], value: 27 },
      { name: "Adobe CS", target: [0,1,2,12], value: 57 },
      { name: "mySql", target: [0,9,10], value: 20 },
      { name: "Grunt", target: [0,9,10], value: 37 },
];

var links = [];

for (var i = 0; i < nodes.length; i++){
      if (nodes[i].target !== undefined) { 
            for ( var x = 0; x < nodes[i].target.length; x++ ) 
              links.push({
                  source: nodes[i],
                  target: nodes[nodes[i].target[x]]  
              });
      };
};


