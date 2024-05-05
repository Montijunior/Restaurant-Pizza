//import modules
import loadHomePage from "./scripts/home";
import loadMenu from "./scripts/menu";
import loadNow from "./scripts/windowsOnload";
import loadContactPage from "./scripts/contact";

// import main stylesheet
import "./styles/main.css"


//select buttons
const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const contactButton = document.querySelector(".contact")
const buttons = document.querySelectorAll("button");

buttons.forEach((button) =>{
    button.addEventListener("click", () => {
        document.querySelector(".active")?.classList.remove("active");
        button.classList.add("active");
    })
})

//load home page when the home button is clicked
homeButton.addEventListener("click", loadHomePage);
console.log("webpack environment ready");

//load menu on click
menuButton.addEventListener("click", loadMenu)

//load contact page
contactButton.addEventListener("click", loadContactPage);


//window loads home page
window.onload = loadNow();