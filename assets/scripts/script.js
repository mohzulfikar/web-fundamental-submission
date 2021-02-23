function getLuckyNumber() {
    let luckyNum = Math.floor(Math.random() * 99999);
    return luckyNum;
};

function setLuckyNumberBoxes() {
    luckNum = getLuckyNumber();
    luckNum = luckNum.toString();
    luckNum = luckNum.padStart(5, "00000");
    console.log(luckNum);
    for (let i = 0; i < luckyNumberBoxes.length; i++) {
        luckyNumberBoxes[i].innerHTML = luckNum[i];
    }
}

const luckyNumberBoxes = document.querySelectorAll("h3.box")

window.onload = function() {
    setLuckyNumberBoxes()
}

const reload = document.querySelector("img.fig-item");
reload.addEventListener('click', function(event) {
    const target = event.target;
    setLuckyNumberBoxes()
})