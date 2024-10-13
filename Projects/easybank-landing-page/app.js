const background = document.querySelector(".background");
const navLinks = document.querySelector(".nav-links");
const hamburger = document.querySelector(".hamburger");
const hamburgerCross = document.querySelector(".hamburger-cross");
const links = document.querySelectorAll("#link");

function linkAdd() {
    links.forEach((link) => {
        link.classList.add("anim-nav-links");
        link.classList.add("interact");
        link.classList.remove("anim-nav-links-remove");
    });
    console.log(links);
    
}
function linkRemove() {
    links.forEach((link) => {
        link.classList.remove("anim-nav-links");
        link.classList.add("anim-nav-links-remove");
    });
}
function resetEl() {
    background.classList.remove("navbar-active");
    hamburger.style.display = "none";
    hamburgerCross.classList.add("hidden");
    hamburgerCross.classList.remove("anim-nav-btn");
    navLinks.classList.remove("anim-nav");
    navLinks.classList.remove('anim-nav-remove');
    linkRemove();

    links.forEach((link) => {
        link.classList.remove("anim-nav-links");
        link.classList.remove("interact");
        link.classList.remove("anim-nav-links-remove");
    });
}

hamburger.addEventListener("click", () => {
    background.classList.add("navbar-active");
    hamburger.style.display = "none";
    hamburgerCross.classList.remove("hidden");
    hamburgerCross.classList.add("anim-nav-btn");
    navLinks.classList.add("anim-nav");
    navLinks.classList.remove('anim-nav-remove');
    navLinks.style.display = "flex";
    linkAdd();
});

hamburgerCross.addEventListener("click", () => {
    background.classList.remove("navbar-active");
    hamburger.style.display = "flex";
    hamburgerCross.classList.add("hidden");
    hamburgerCross.classList.remove("anim-nav-btn");
    navLinks.classList.remove("anim-nav");
    navLinks.classList.add('anim-nav-remove');
    linkRemove();
});

background.addEventListener("click", () => {
    background.classList.remove("navbar-active");
    hamburger.style.display = "flex";
    hamburgerCross.classList.add("hidden");
    hamburgerCross.classList.remove("anim-nav-btn");
    navLinks.classList.remove("anim-nav");
    navLinks.classList.add('anim-nav-remove');
    linkRemove();
});

links.forEach((link) => {
    link.addEventListener("click", () => {
        if(link.classList.contains('interact')){
            background.classList.remove("navbar-active");
            hamburger.style.display = "flex";
            hamburgerCross.classList.add("hidden");
            hamburgerCross.classList.remove("anim-nav-btn");
            navLinks.classList.remove("anim-nav");
            navLinks.classList.add('anim-nav-remove');
            linkRemove();
        }
    });
})




const mediaQuery = window.matchMedia('(max-width: 1024px)');

function handleMediaQueryChange(event) {
    if (event.matches) {
        console.log('width is 1024px or less');

        hamburger.style.display = "flex";
        navLinks.classList.add('anim-nav-remove');
    } else {
        console.log('width is greater than 1024px');

        resetEl();
    }
}
// Initial check
handleMediaQueryChange(mediaQuery);
// Track changes
mediaQuery.addListener(handleMediaQueryChange);