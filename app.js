// Scrolling Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  })
});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((element) => observer.observe(element));


// Video Hover Effects
const videos = document.querySelectorAll('.video');

var windowWidth = window.innerWidth;
var min_width = 768;

if(windowWidth => min_width){
  videos.forEach(video => {
    video.addEventListener('mouseover', () => {
      video.style.filter = "blur(0px)"
    });

    video.addEventListener('mouseout', () => {
      video.style.filter = "blur(2px)"
    });
  });
}


// Autoplay video
var video = document.getElementsById("video");
video.setAttribute("playsinline", "");
video.setAttribute("muted", "");
video.play();


// Copy email to clipboard function
const email = "oscar.rosales1018@gmail.com"

function copyEmail() {
  navigator.clipboard.writeText(email);

  alert("E-mail copied to clipboard!")
}