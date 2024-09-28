// Select the menu icon and the navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Select sections and nav links for the scroll functionality
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Scroll functionality for highlighting active links
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

// Toggle menu functionality
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');  // Toggle between the 'bx-x' (close icon) and the regular menu icon
    navbar.classList.toggle('active');  // Show/hide the navbar
};
