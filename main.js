/*-----------------------toggle icon navbar-------------------*/
let menuIcon = document.querySelector('#menu-icon');  // Fixed variable name to 'menuIcon'
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');  // Corrected 'classlist' to 'classList'
    navbar.classList.toggle('active');
}

/*-----------------------scroll section active link-------------------------*/
let sections = document.querySelectorAll('section');  // Get all sections
let navlinks = document.querySelectorAll('header nav a');  // Get all navigation links

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;  // Current scroll position
        let offset = sec.offsetTop - 150;  // Offset for active state
        let height = sec.offsetHeight;  // Height of the section
        let id = sec.getAttribute('id');  // ID of the section

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {  // Changed 'apply' to use 'forEach' correctly
                link.classList.remove('active');  // Corrected 'classlist' to 'classList'
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /*-----------------------sticky navbar-------------------*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);  // Corrected 'classlist' to 'classList'

    /*-----------------------remove toggle icon and navbar-------------------*/
    menuIcon.classList.remove('fa-xmark');  // Corrected 'menuIcon' variable name
    navbar.classList.remove('active');

    /*-----------------------scroll reveal-------------------*/
};

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});  
ScrollReveal().reveal('.home-contact h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-contact p, .about-content', {origin: 'right'});
ScrollReveal().reveal('.skills .skill-main', {origin: 'left'});
 /*-----------------------type-------------------*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer', 'IS student'],  
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true


});


// Circle skill functionality
const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
    const dots = elem.getAttribute("data-dots");
    const marked = elem.getAttribute("data-percent");
    const percent = Math.floor(dots * marked / 100);
    let points = "";
    const rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }

    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll(".points");
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
    }
});





