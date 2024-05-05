const contentPage = document.querySelector("#content");

export default function loadContactPage() {

    contentPage.innerHTML = "";

    contentPage.classList.remove("homeStyle");
    contentPage.classList.remove("menuStyle");
    contentPage.classList.add("contactStyle");
}