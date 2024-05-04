import "./styles/main.css"
import loadHomePage from "./scripts/home";

const homeButton = document.querySelector(".home");
homeButton.addEventListener("click", loadHomePage);
console.log("webpack environment ready");