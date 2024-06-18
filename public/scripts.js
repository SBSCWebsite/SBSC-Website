var aboutSubMenu = document.getElementById('aboutSubBar');
var isMenuShown = true;

window.addEventListener('scroll', (event) => {
    var header = document.getElementById('logoBar');

    if (window.scrollY > 50) {  // Adjust the threshold (50px) as needed
        header.classList.add('dim'); // Add a class for scrolled state
        TurnMenuOff();
      } else {
        header.classList.remove('dim'); 
    }

    const element = document.getElementById('achievementScroller'); // Get your scrollable element

    element.addEventListener('scroll', function(event) {
        if(element.scrollLeft > 20){
            document.getElementById("imageTrack").classList.add('dim');
        }
        else{
            document.getElementById("imageTrack").classList.remove('dim');
        }
    });
});

window.addEventListener('DOMContentLoaded', (event) => {
    const images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
        images[i].onerror = function () {
            this.src = './Images/no media.png'; // Replace with the path to your default image
        };
    }
});

function OpenAboutMenu(){
    if(isMenuShown) {
        TurnMenuOff();
    }
    else {
        TurnMenuOn();
    }
}

function TurnMenuOff(){
    aboutSubMenu = document.getElementById('aboutSubBar');
    aboutSubMenu.classList.add("hidden");

    isMenuShown = true;
}

function TurnMenuOn(){
    aboutSubMenu = document.getElementById('aboutSubBar');
    aboutSubMenu.classList.remove("hidden");

    isMenuShown = false;
}

function SwitchPage(url){
    window.open(url, '_self'); // Opens in the current tab (replaces current page)
}

var acheivements = [
    "highlight 1.jpg",
    "highlight 2.jpg",
    "highlight 3.jpg",
    "photo 1.jpg",
    "photo 2.jpg",
    "photo 3.jpg",
    "photo 4.jpg",
    "photo 5.jpg",
    "photo 7.jpg",
    "photo 8.jpg",
]

// //Circular
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('imageTrack');
    // const center = document.getElementById('imageTrack');
    const numImages = acheivements.length; // Number of images
   
    // const radius = 230; // Radius of the circle
    // var xOffset = 30;
    // var yOffset = -50;

    for (let i = 0; i < numImages; i++) {
    //   const angle = (i / numImages) * 2 * Math.PI;
    //   const x = (center.offsetLeft + xOffset) + (radius * (Math.cos(angle)));
    //   const y = (center.offsetTop + yOffset) + (radius * (Math.sin(angle)));
  
      const img = document.createElement('img');
      img.src = "./Images/Acheivements/" + (acheivements[i]); // Replace with your image path
      img.alt = 'Image ' + (i + 1);
    //   img.classList.add('child-image');
    //   img.style.top = y + 'px';
    //   img.style.left = x + 'px';
    //   img.style.transformOrigin = 'center'; // Set the rotation origin
  
      container.appendChild(img);
    }
  });

var imageTrack = document.querySelector('.image-track');
var images = document.querySelectorAll('.image-track img');

let isDragging = false;
let startX;
let scrollLeft;

window.addEventListener('scroll', (event) => {
  imageTrack = document.querySelector('.image-track');
  images = document.querySelectorAll('.image-track img');

  imageTrack.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - imageTrack.offsetLeft;
    scrollLeft = imageTrack.scrollLeft;
  });
  
  imageTrack.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - imageTrack.offsetLeft;
    const walk = (x - startX) * 2; // Increase scroll speed (adjust 2 as needed)
    imageTrack.scrollLeft = scrollLeft - walk;
  });
  
  imageTrack.addEventListener('mouseup', () => {
    isDragging = false;
  });
  
  imageTrack.addEventListener('mouseleave', () => {
    isDragging = false;
  });
  
});

function infiniteScroll() {
  if (imageTrack.scrollLeft >= imageTrack.scrollWidth / 2) {
    imageTrack.scrollLeft = 0;
  } else if (imageTrack.scrollLeft <= 0) {
    imageTrack.scrollLeft = imageTrack.scrollWidth / 2;
  }
}

setInterval(infiniteScroll, 20); // Adjust interval for scroll speed