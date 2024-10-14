const hamburger = document.querySelector('.hamburger');
const headerNav = document.querySelector('.header-nav');
const navLinks = document.querySelectorAll('#links');
const contactBtn = document.querySelector('.contact-btn');

const mediaQuery = window.matchMedia('(max-width: 768px)');

console.log(mediaQuery.matches);

if (mediaQuery.matches) {
    hamburger.addEventListener('click', () => {
        if (headerNav.style.display === "none") {
            headerNav.style.display = "flex"
        } else {
            headerNav.style.display = "none"
        }
    })

    contactBtn.addEventListener('click', () => {
        if (headerNav.style.display === "none") {
            headerNav.style.display = "flex"
        } else {
            headerNav.style.display = "none"
        }
    })

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (headerNav.style.display === "none") {
                headerNav.style.display = "flex"
            } else {
                headerNav.style.display = "none"
            }
        })
    })
}