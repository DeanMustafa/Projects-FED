// SKILLS
const frontEnd = document.querySelector("#frontend");
const backEnd = document.querySelector("#backend");
const junior = document.querySelector("#junior");
const senior = document.querySelector("#senior");
const html = document.querySelector("#html");
const css = document.querySelector("#css");
const javaScript = document.querySelector("#javascript");
const ror = document.querySelector("#ror");
const ruby = document.querySelector("#ruby");

const clickableEl = document.querySelectorAll('.job-container')

clickableEl.forEach((clickable) => {
    clickable.addEventListener('click', (e) => {
        if (e.target.id === 'junior') {
            console.log('junior');
        } else if (e.target.id === 'senior') {
            console.log('senior');
        } else {
            console.log('no matching');
            
        }
    })
})



frontEnd.addEventListener("click", () => {
    console.log("frontend clicked");
    console.log(clickableEl);
});
