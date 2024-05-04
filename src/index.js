import "./styles/main.css"
import loadHomePage from "./scripts/home";
import loadMenu from "./scripts/menu";
import loadNow from "./scripts/windowsOnload";


//select buttons
const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");

//load home page when the home button is clicked
homeButton.addEventListener("click", loadHomePage);
console.log("webpack environment ready");

//load menu on click
menuButton.addEventListener("click", loadMenu)


//window loads home page
window.onload = loadNow();