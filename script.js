function btnColor(btn){
    btn.style.backgroundColor = "white";
}

function btnTrans(btn) {
    btn.style.backgroundColor = "transparent";
}

var btn = document.querySelector(".btn")
btn.addEventListener("click", random)

const background = document.querySelector("#bdy");
const text = document.querySelector(".hex");

const hexArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

function random() {
    let hex = [];
    let temp = ""
    for(var i = 0; i < 6; i++) {
        hex[i] = hexArr[Math.floor(Math.random() * 16)];
        temp += hex[i];
    }
    console.log(temp);
    background.style.backgroundColor = "#" + temp;
    text.innerHTML = "#" + temp;
}