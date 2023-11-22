import "./style.scss";

const body = document.querySelector("body")
const list = document.querySelector(".list")

console.log(getRandomColors);



function getRandomColors() {
    return "#" + Math.floor(Math.random() * 116777215).toString(16)
}

document.addEventListener("DOMContentLoaded", function () {
    body.style.backgroundColor = getRandomColors()
}) 






