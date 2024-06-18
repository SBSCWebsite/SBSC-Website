var aboutSubMenu = document.getElementById('aboutSubBar');
var isMenuShown = true;

window.addEventListener('scroll', (event) => {
    var header = document.getElementById('logoBar');

    if (window.scrollY > 50) {  // Adjust the threshold (50px) as needed
        header.classList.add('dim'); // Add a class for scrolled state
        TurnMenuOff();
      } else {
        header.classList.remove('dim'); 
}});

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
    "photo 1.jpg",
    "photo 2.jpg",
    "photo 3.jpg",
    "photo 4.jpg",
    "photo 5.jpg",
]

// //Circular
// document.addEventListener("DOMContentLoaded", function() {
//     const container = document.querySelector('.container');
//     const center = document.getElementById('center');
//     const numImages = acheivements.length; // Number of images
   
//     const radius = 230; // Radius of the circle
//     var xOffset = 30;
//     var yOffset = -50;

//     for (let i = 0; i < numImages; i++) {
//       const angle = (i / numImages) * 2 * Math.PI;
//       const x = (center.offsetLeft + xOffset) + (radius * (Math.cos(angle)));
//       const y = (center.offsetTop + yOffset) + (radius * (Math.sin(angle)));
  
//       const img = document.createElement('img');
//       img.src = "./Images/Acheivements/" + (acheivements[i]); // Replace with your image path
//       img.alt = 'Image ' + (i + 1);
//       img.classList.add('child-image');
//       img.style.top = y + 'px';
//       img.style.left = x + 'px';
//       img.style.transformOrigin = 'center'; // Set the rotation origin
  
//       container.appendChild(img);
//     }
//   });