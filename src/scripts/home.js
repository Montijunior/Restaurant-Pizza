import '../styles/home.css';
import heroImage from '../assets/chief.jpg'

const contentPage = document.querySelector("#content");
// load home page
export default function loadHomePage(){
    //do not overwrite once click
    contentPage.innerHTML = "";

    // restaurant title
    const title = document.createElement("h1");
    title.classList.add("title")
    title.textContent ="Pizza Restaurant Prince";

    // hero image
    const chiefImage = new Image();
    chiefImage.classList.add("heroImage")
    chiefImage.src = heroImage;

    //visit our an order now
    const para = document.createElement("p");
    para.classList.add("para")
    para.textContent = "Elected best restaurant in Italy 2020 ";

    // append to contentPage
    contentPage.appendChild(title);
    contentPage.appendChild(chiefImage);
    contentPage.appendChild(para);
}