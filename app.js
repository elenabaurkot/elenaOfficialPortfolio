// RESUME MODAL
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


// PROJECT MODALS
// YellowChat Modal
var projModal = document.getElementsByClassName("proModal")[0];
var proBtn = document.getElementsByClassName("proBtn")[0];
// When the user clicks on the button, open the modal
proBtn.onclick = function() {
  projModal.style.display = "block";
}
// Get the <span> element that closes the modal
var closeOut = document.getElementsByClassName("proj-close")[0];
// When the user clicks on <span> (x), close the modal
closeOut.onclick = function() {
  projModal.style.display = "none";
}

// FlipCards Modal
var projModal1 = document.getElementsByClassName("proModal")[1];
var proBtn1 = document.getElementsByClassName("proBtn")[1];
// When the user clicks on the button, open the modal
proBtn1.onclick = function() {
  projModal1.style.display = "block";
}
// Get the <span> element that closes the modal
var closeOut1 = document.getElementsByClassName("proj-close")[1];
// When the user clicks on <span> (x), close the modal
closeOut1.onclick = function() {
  projModal1.style.display = "none";
}

// Weather Dashboard Modal
var projModal2 = document.getElementsByClassName("proModal")[2];
var proBtn2 = document.getElementsByClassName("proBtn")[2];
// When the user clicks on the button, open the modal
proBtn2.onclick = function() {
  projModal2.style.display = "block";
}
// Get the <span> element that closes the modal
var closeOut2 = document.getElementsByClassName("proj-close")[2];
// When the user clicks on <span> (x), close the modal
closeOut2.onclick = function() {
  projModal2.style.display = "none";
}

// Day Planner Modal
var projModal3 = document.getElementsByClassName("proModal")[3];
var proBtn3 = document.getElementsByClassName("proBtn")[3];
// When the user clicks on the button, open the modal
proBtn3.onclick = function() {
  projModal3.style.display = "block";
}
// Get the <span> element that closes the modal
var closeOut3 = document.getElementsByClassName("proj-close")[3];
// When the user clicks on <span> (x), close the modal
closeOut3.onclick = function() {
  projModal3.style.display = "none";
}

// Password Generator Modal
var projModal4 = document.getElementsByClassName("proModal")[4];
var proBtn4 = document.getElementsByClassName("proBtn")[4];
// When the user clicks on the button, open the modal
proBtn4.onclick = function() {
  projModal4.style.display = "block";
}
// Get the <span> element that closes the modal
var closeOut4 = document.getElementsByClassName("proj-close")[4];
// When the user clicks on <span> (x), close the modal
closeOut4.onclick = function() {
  projModal4.style.display = "none";
}

// Code Quiz Modal
var projModal5 = document.getElementsByClassName("proModal")[5];
var proBtn5 = document.getElementsByClassName("proBtn")[5];
// When the user clicks on the button, open the modal
proBtn5.onclick = function() {
  projModal5.style.display = "block";
}
// Get the <span> element that closes the modal
var closeOut5 = document.getElementsByClassName("proj-close")[5];
// When the user clicks on <span> (x), close the modal
closeOut5.onclick = function() {
  projModal5.style.display = "none";
}




// NAVIGATION BAR ANIMATION
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

