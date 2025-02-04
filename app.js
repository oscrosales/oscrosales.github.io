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


const videos = document.querySelectorAll('.video');

videos.forEach(video => {
  video.addEventListener('mouseover', () => {
    video.style.filter = "blur(0px)"
    video.play();
  });

  video.addEventListener('mouseout', () => {
    video.style.filter = "blur(2px)"
    video.pause();
  });
});