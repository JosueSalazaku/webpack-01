import "./style.scss";


const list = document.querySelector(".list")
const btnCount = document.querySelector(".count")




function getRandomColors() {
    const letters = '0123456789ABCDEF';
    let color ='#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        console.log(color);
        
    }
    return color;
}

// document.addEventListener("DOMContentLoaded", function () {
//     const body = document.body;
//     body.style.backgroundColor = getRandomColors();
//     console.log(body.children)
// }) 

btnCount.addEventListener("click", function() {
    const body = document.body;
    body.style.backgroundColor = getRandomColors();
})





