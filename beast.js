let beast = document.getElementById("beast");

// dynamic shadow on button
beast.addEventListener("mousedown", () => {
    beast.style.boxShadow = "1px 1px 5px rgba(0, 0, 0, 0.24)";
});

beast.addEventListener("mouseup", () => {
    beast.style.boxShadow = "5px 5px 5px rgba(0, 0, 0, 0.24)";
});

beast.addEventListener("click", () => {

});