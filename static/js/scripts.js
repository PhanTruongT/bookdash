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
    }
    else
    {
        document.getElementById("clear-button").style.visibility = "hidden";
       
    }

}