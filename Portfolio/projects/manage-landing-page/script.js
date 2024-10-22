const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav-links");
const links = document.querySelectorAll("#link");
const background = document.querySelector(".dark-bg");
const body = document.querySelector("body");
const mediaQuery = window.matchMedia('(max-width: 1000px)');

hamburger.addEventListener("click", () => {
    console.log("hamburger clicked");
    if (navbar.style.display === "flex") {
        reset();
    } else {
        navbar.style.display = "flex";
        background.style.display = "unset";
        hamburger.classList.add("close-hamb");
        body.style.overflowY = 'hidden';

        console.log(body);
        
    }
});
links.forEach((link) => {
    link.addEventListener("click", () => {
        if (mediaQuery.matches){
            reset();
        }
    });
});
background.addEventListener("click", () => {
    reset();
    console.log("bg");
});

function reset() {
    navbar.style.display = "none";
    background.style.display = "none";
    hamburger.classList.remove("close-hamb");
    body.style.overflowY = 'unset';
}
function handleResponsiveChange() {
    navbar.style.display = "flex";
    background.style.display = "none";
    hamburger.classList.remove("close-hamb");
    body.style.overflowY = 'unset';
}

function setMediaQuery(e) {    
    if (mediaQuery.matches){
        navbar.style.display = "none";
        console.log('true');
        
    } else{
        handleResponsiveChange();
        console.log('false');
    }
}
setMediaQuery(mediaQuery);
mediaQuery.addListener(setMediaQuery)