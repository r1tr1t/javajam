let beast = document.getElementById("beast");
let audio = [];
for(let i=0; i<=11; i++) {
    let clip = new Audio(`beast/beast${i}.wav`);
    audio.push(clip);
}

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

// dynamic shadow on button
beast.addEventListener("mousedown", () => {
    beast.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.24)";
});

beast.addEventListener("mouseup", () => {
    beast.style.boxShadow = "10px 10px 5px rgba(0, 0, 0, 0.24)";
});

beast.addEventListener("touchstart", () => {
    beast.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.24)";
});

beast.addEventListener("touchend", () => {
    beast.style.boxShadow = "10px 10px 5px rgba(0, 0, 0, 0.24)";
});

// play the audio
beast.addEventListener("click", () => {
    audio[getRandomInt(12)].play();
});