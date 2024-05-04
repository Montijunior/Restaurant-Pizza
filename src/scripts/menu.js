import '../styles/menu.css';
import pizzaOne from '../assets/carne.png';
import pizzaTwo from '../assets/colorato.png';
import pizzaThree from '../assets/crema.png';
import pizzaFour from '../assets/disgustoso.png';
import pizzaFive from '../assets/gamberi.png';
import pizzaSix from '../assets/pepe.png';
import pizzaSeven from '../assets/pomodoro.png';
import pizzaEight from '../assets/salsiccia.png';

//reference the content
const contentPage = document.querySelector("#content");

//load menu function
export default function loadMenu(){
    contentPage.innerHTML = "";

    //style the contentPage
    contentPage.style.display = "grid";
    contentPage.style.gridTemplateColumns = "repeat(2, 1fr)";
    contentPage.style.gap = "40px";
    contentPage.style.alignItems = "center";
    contentPage.style.justifyContent = "center";

    //pizza Images
    const imageOne  = document.createElement("img");
    imageOne.src = pizzaOne;

    const imageTwo  = document.createElement("img");
    imageTwo.src = pizzaTwo;

    const imageThree  = document.createElement("img");
    imageThree.src = pizzaThree;

    const imageFour  = document.createElement("img");
    imageFour.src = pizzaFour;

    const imageFive  = document.createElement("img");
    imageFive.src = pizzaFive;

    const imageSix  = document.createElement("img");
    imageSix.src = pizzaSix;

    const imageSeven  = document.createElement("img");
    imageSeven.src = pizzaSeven;

    const imageEight  = document.createElement("img");
    imageEight.src = pizzaEight;

    //append all pizza to page
    contentPage.appendChild(imageOne);
    contentPage.appendChild(imageTwo);
    contentPage.appendChild(imageThree);
    contentPage.appendChild(imageFour);
    contentPage.appendChild(imageFive);
    contentPage.appendChild(imageSix);
    contentPage.appendChild(imageSeven);
    contentPage.appendChild(imageEight);
}