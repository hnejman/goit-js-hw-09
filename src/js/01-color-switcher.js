const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
const body = document.querySelector("body");
stopBtn.disabled = true;
body.style.backgroundColor = "#ffffff";

let intervalId;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function setColor(element) {
    element.style.backgroundColor = getRandomHexColor();
}

startBtn.addEventListener("click", e => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    intervalId = setInterval(setColor, 1000, body);
});

stopBtn.addEventListener("click", e => {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(intervalId);
});