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
    beast.style.boxShadow = "1px 1px 5px rgba(0, 0, 0, 0.24)";
});

beast.addEventListener("mouseup", () => {
    beast.style.boxShadow = "5px 5px 5px rgba(0, 0, 0, 0.24)";
});

beast.addEventListener("click", () => {
    audio[getRandomInt(12)].play();
});