// RESULTS PAGE SCRIPTS
function createCards(n){ // n = number of cards to create
    var element = document.getElementById("copy");
    element.innerHTML = "<div class=\"card\">" + element.innerHTML + "</div>";
    var item = element.innerHTML;
    for(var i=0; i<n; i++){ 
        var container = document.getElementById("results_container");
        container.innerHTML += item;
    } 
}

