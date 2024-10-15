//* BUTTON
//* BUTTON
const modeToggler = document.querySelector(".mode-toggle");
const pageButtons = document.querySelectorAll(".btn");
//* ICONS
//* ICONS
const sunIcon = document.querySelector(".icon-sun");
const moonIcon = document.querySelector(".icon-moon");
const gitHubIcons = document.querySelectorAll(".github");
const linkedInIcons = document.querySelectorAll(".linkedin");
const checkedIcons = document.querySelectorAll(".checked-icon");
//*BACKGROUND COLOR
//*BACKGROUND COLOR
const backgroundColorChange = document.querySelector(".page-container");
const lineBreaks = document.querySelectorAll(".skills-line-break");
const contactInputs = document.querySelectorAll(".input");
const emailPreview = document.querySelector(".submit-preview");

modeToggler.addEventListener("mouseover", () => {
  console.log("MOUSEOVER");

  //*Add animation class to icon
  sunIcon.classList.add("rotate-icon");
  moonIcon.classList.add("rotate-icon");
});
modeToggler.addEventListener("mouseout", () => {
  console.log("MOUSEOUT");

  //*Remove animation class from icon
  sunIcon.classList.remove("rotate-icon");
  moonIcon.classList.remove("rotate-icon");
});
modeToggler.addEventListener("click", () => {
  console.log("CLICK");

  //*HERO HERO HERO
  //*HERO HERO HERO
  //*Replace mode toggle icons
  sunIcon.classList.toggle("hidden");
  moonIcon.classList.toggle("hidden");

  //*Replace social link icons
  gitHubIcons.forEach((github) => {
    console.log(github);
    github.classList.toggle("hidden");
  });
  linkedInIcons.forEach((linkedin) => {
    console.log(linkedin);
    linkedin.classList.toggle("hidden");
  });

  //*SKILLS SKILLS SKILLS
  //*SKILLS SKILLS SKILLS
  //*Replace skills checked icons
  checkedIcons.forEach((checkedIcon) => {
    checkedIcon.classList.toggle("hidden");
  });
  lineBreaks.forEach((lineBreak) => {
    lineBreak.classList.toggle("light-clr-break-line");
    lineBreak.classList.toggle("dark-clr-break-line");
  });

  //*CONTACT CONTACT CONTACT
  //*CONTACT CONTACT CONTACT
  //*Change text and border colors
  contactInputs.forEach((contactInput) => {
    contactInput.classList.toggle("input-light");
    contactInput.classList.toggle("input-dark");
  });

  //*EMAIL PREVIEW EMAIL PREVIEW EMAIL PREVIEW
  //*EMAIL PREVIEW EMAIL PREVIEW EMAIL PREVIEW
  //*Change colors of email preview page
  emailPreview.classList.toggle("submit-dark");
  emailPreview.classList.toggle("submit-light");
  let pageView = emailPreview.querySelector(".email-page");
  pageView.classList.toggle("light-email-page");
  pageView.classList.toggle("dark-email-page");

  //*GLOBAL GLOBAL GLOBAL
  //*GLOBAL GLOBAL GLOBAL
  //*Change buttons background and text colors
  pageButtons.forEach((button) => {
    button.classList.toggle("btn-dark");
    button.classList.toggle("btn-light");
  });

  //*Change background and text color
  backgroundColorChange.classList.toggle("bg-dark");
  backgroundColorChange.classList.toggle("text-light");
  backgroundColorChange.classList.toggle("bg-light");
  backgroundColorChange.classList.toggle("text-dark");
});

//*PREVIEW PREVIEW PREVIEW
//*PREVIEW PREVIEW PREVIEW
//*Email preview page - assigning contact inputs to preview section
const nameInput = document.querySelector("#name_input");
const emailInput = document.querySelector("#email_input");
const messageInput = document.querySelector("#message_input");

const namePreview = document.querySelector(".name-view");
const nemailPreview = document.querySelector(".email-view");
const messagePreview = document.querySelector(".message-view");

nameInput.addEventListener("input", (e) => {
  console.log(e.target.value);
  let newNameInput = e.target.value;

  namePreview.innerHTML = newNameInput;
});
emailInput.addEventListener("input", (e) => {
  console.log(e.target.value);
  let newEmailInput = e.target.value;

  nemailPreview.innerHTML = newEmailInput;
});
messageInput.addEventListener("input", (e) => {
  console.log(e.target.value);
  let newMesssageInput = e.target.value;

  messagePreview.innerHTML = newMesssageInput;
});

//*SUBMIT PREVIEW
//*SUBMIT PREVIEW
const sendButton = document.querySelector(".send");
const backButton = document.querySelector(".back");
const submitButton = document.querySelector(".submit");
const warningMessage = document.querySelector('.warning-msg')

submitButton.addEventListener("click", () => {
  console.log("SUBMIT CLICK");

  if(nameInput.value === "" || emailInput.value === "" || messageInput.value === ""){
    console.log('has no input');
    warningMessage.classList.remove('hidden');
  } else {
    console.log('has input');
    warningMessage.classList.add('hidden');
    emailPreview.classList.toggle("hide-preview");
    emailPreview.classList.toggle("show-preview");
  }
});
sendButton.addEventListener("click", () => {
  console.log("SEND CLICK");

  emailPreview.classList.toggle("show-preview");
  emailPreview.classList.toggle("hide-preview");
  SendEmail();
});
backButton.addEventListener("click", () => {
  console.log("BACK CLICK");

  emailPreview.classList.toggle("show-preview");
  emailPreview.classList.toggle("hide-preview");
});

//*SMOOTH SCROLLING
//*SMOOTH SCROLLING
//*Scroll down to Contact page
const resumeBTN = document.querySelector("#resume_btn");
const contactPage = document.querySelector("#contact");

resumeBTN.addEventListener("click", () => {
  console.log(resumeBTN);
  console.log(contactPage);

  contactPage.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});

//* POP UP ANIMATION
//* POP UP ANIMATION
//* Section will pop up when screen/observer see them on the screen
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("pop-up");
    } else {
      entry.target.classList.remove("pop-up");
    }
  });
});

const hiddenElements = document.querySelectorAll(".invisible");
const hiddenElementsReverse = document.querySelectorAll(".invisible-reverse");
const hiddenElementsFade = document.querySelectorAll(".invisible-fade");
hiddenElements.forEach((el) => observer.observe(el));
hiddenElementsReverse.forEach((el) => observer.observe(el));
hiddenElementsFade.forEach((el) => observer.observe(el));

//          Email JS
//          Email JS
//          Email JS
//          Email JS
//          Email JS
function SendEmail() {
  var params = {
    name_input : document.querySelector("#name_input").value,
    email_input : document.querySelector("#email_input").value,
    message_input : document.querySelector("#message_input").value
  }

  emailjs.send("service_oljn48a", "template_yth79lb", params).then(function () {
    alert("Email has been sent successfully!");
  })

  setTimeout(function() {
      window.location.reload();
    }, 3000);
}