function openNav() {
    document.getElementById("side-bar-expand").style.width = "180px";
    document.getElementById("close-button").style.visibility = "visible";
    document.getElementById("close-button-wrap").style.visibility = "visible";
}

function closeNav() {
    document.getElementById("side-bar-expand").style.width = "0px";
    document.getElementById("close-button").style.visibility = "hidden";
    document.getElementById("close-button-wrap").style.visibility = "hidden";
}