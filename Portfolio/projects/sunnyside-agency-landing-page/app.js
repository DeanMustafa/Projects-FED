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

// Checks if the screen size, depending on that either shows or hides the headerNav
function mediaQueryCheck() {
    if (mediaQuery.matches) {
        headerNav.style.display = "none";
    } else {
        headerNav.style.display = "flex";
    }
}
// Calling the function on load/reload
mediaQueryCheck();