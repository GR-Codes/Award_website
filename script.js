const scroll = new LocomotiveScroll({
  el: document.querySelector('.containerr'),
  smooth: true
});

const video = document.querySelector(".page1-video");
const play = document.querySelector("#play");

// video.addEventListener("mouseenter" , function(){
//     play.style.opacity = 1
//     play.style.scale = 1

// })

function videocon() {
  video.addEventListener("mouseenter", function () {
    gsap.to(play, {
      opacity: 1,
      scale: 1,
    });
  });

  video.addEventListener("mouseout", function () {
    gsap.to(play, {
      opacity: 0,
      scale: 0,
    });
  });
}


function mousecursor() {
  video.addEventListener("mousemove", function (dets) {
    gsap.to(play, {
      left: dets.x -50,
      top: dets.y -80
    });
  });
}

// video.addEventListener("mouseout", function () {
//   play.style.opacity = 0;
//   play.style.scale = 0;
// });

function text(){


gsap.from(".page1 h1", {
  y: 100,
  opacity: 0,
  duration: 0.9,
  Delay: 0.5,
  stagger: 0.4,
});

}


videocon();
mousecursor();
text();