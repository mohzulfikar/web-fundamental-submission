function getLuckyNumber() {
    let luckyNum = Math.floor(Math.random() * 99999);
    return luckyNum;
};

function pad(num, num_length) {
    var s = "00000" + num;
    return s.substr(s.length - num_length);
};

// Setter Lucky Number
function setLuckyNumberBoxes() {
    luckNum = getLuckyNumber();
    luckNum = luckNum.toString();
    luckNum = pad(luckNum, 5);
    for (let i = 0; i < luckyNumberBoxes.length; i++) {
        luckyNumberBoxes[i].innerHTML = luckNum[i];
    }
};

// Selector elemen lucky number
const luckyNumberBoxes = document.querySelectorAll("h3.box");

// Inisialisasi nilai lucky number
window.onload = function() {
    setLuckyNumberBoxes();
};

const reload = document.querySelector("img.fig-item");
reload.addEventListener('click', function() {
    setLuckyNumberBoxes();
});