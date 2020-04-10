function openNav() {
    document.getElementById("side-bar-expand").style.width = "180px";
    
    
    
}

function closeNav() {
    document.getElementById("side-bar-expand").style.width = "0px";
}

function checkClearButton() {
    if(document.getElementById("search-form-input").value.length > 0)
    {
        document.getElementById("clear-button").style.visibility = "visible";
        document.getElementById("search-button").style.background = "#4d4d4d";
        return true;
    }
    else
    {
        document.getElementById("clear-button").style.visibility = "hidden";
        return false;
    }

}

function clearSearchInput() {
    document.getElementById("search-form").reset();
    document.getElementById("search-form-input").focus();
    checkClearButton();

}






//set search-button highlight based on mouse hover and visibility state of clear button
function setHighlight(value) {

    if(value == 0 && !checkClearButton())
    {
        document.getElementById("search-button").style.background = "none";
    }
    else
    {
        document.getElementById("search-button").style.background = "#4d4d4d";
    }
}