document.addEventListener("contextmenu", function (e) {
    if (e.target.id === "pelixLogo") {
        e.preventDefault();
    }
});

const logo = document.getElementById("pelixLogo");
logo.setAttribute("draggable", "false");

logo.addEventListener("dragstart", function (e) {
    e.preventDefault();
});

logo.addEventListener("mousedown", function (e) {
    if (e.button === 1 || e.button === 2) { 
        e.preventDefault();
    }
});
