// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li'); 
  
  burger.addEventListener('click', ()=> {
      // Toggle Nav
      nav.classList.toggle('nav-active');

      // Animate Links
      navLinks.forEach((link, index) => {
          if(link.style.animation) {
              link.style.animation = '';
          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .1}s`;
          }
      });
      // Burger Animation
      burger.classList.toggle('toggle');
  });
};


const navClose = () => {
  const nav = document.querySelector('.nav-links');
  const link = document.getElementsByClassName('link');
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelectorAll('.nav-links li'); 

  // grabs all of the nav links and closes nav dropdown if any are clicked
  for (let i = 0 ; i < link.length; i++) {
    link[i].addEventListener('click', ()=> {
      nav.classList.toggle('nav-active');
      burger.classList.toggle('toggle');

    // Animate Links
    navLinks.forEach((link, index) => {
      if(link.style.animation) {
          link.style.animation = '';
      } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .1}s`;
      }
    });
  })
 }
};


navSlide();
navClose();

