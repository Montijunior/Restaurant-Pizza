import map from '../assets/map.jpeg';
const contentPage = document.querySelector("#content");

export default function loadContactPage() {

    contentPage.innerHTML = "";

    contentPage.classList.remove("homeStyle");
    contentPage.classList.remove("menuStyle");
    contentPage.classList.add("contactStyle");

    const addressList = document.createElement("ul");
    addressList.classList.add("address");

    const lineOne = document.createElement("li");
    lineOne.textContent = "Address :";

    const lineTwo = document.createElement("li");
    lineTwo.textContent = " CONAI. Consorzio Nazionale Imballaggi Via Pompeo Litta,";

    const lineThree =  document.createElement("li");
    lineThree.textContent = "5 20122 Milano /ITALY"

    const lineFour = document.createElement("li");
    lineFour.textContent = "Tel +39 (0) 2 54044.1. Fax +39 (0) 2 54122648 ";

    addressList.appendChild(lineOne);
    addressList.appendChild(lineTwo);
    addressList.appendChild(lineThree);
    addressList.appendChild(lineFour);

    //map
    const mapImage = new Image();
    mapImage.classList.add("googleMap");
    mapImage.src = map;
    mapImage.alt = "some random restaurant google map";

    contentPage.appendChild(addressList);
    contentPage.appendChild(mapImage);
}