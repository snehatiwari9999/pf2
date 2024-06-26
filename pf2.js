

// -------sticky navbar ------------
 let header = document.querySelector('header');
 header.classList.toggle('sticky',window.scrollY > 100);

// -------remove toogle icon and navbar ------------

// menuicon.classList.remove('fa-xmark');
// navbar.classList.remove('active');
// };



// -------------scroll reveal-----


ScrollReveal({ 
    distance: '800px',
    duration: 2000,
    delay: 200, 
 });
 ScrollReveal().reveal('.home-content,heading', { delay: 500 });
 ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form', { origin: 'button' });
 ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

// ---------------------------typedjs------------------
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toogleNavbar = () => {
    
    nav_header.classList.toggle("active");
};


mobile_nav.addEventListener('click', () => toogleNavbar());


// ------------contact-------------
const form = document.querySelector('form');

function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

// ----------------read more/less---------
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("btn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }