import "./style.scss";


const list = document.querySelector(".list")
const btnCount = document.querySelector(".count")


function updateCount() {
    const currentText = btnCount.textContent
    const currentCount = parseInt(currentText.split(' ')[1], 10);
    const updatedCount = currentCount + 1;
    btnCount.textContent = `COUNT ${updatedCount}`;
}

function getRandomColors() {
    const letters = '0123456789ABCDEF';
    let color ='#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}

btnCount.addEventListener("click", function() {
    const body = document.body;
    body.style.backgroundColor = getRandomColors()
    updateCount();

    
    
})





