window.onload = initialize;


function initialize() {
  document.getElementById('search-button').addEventListener('click', onSearchButtonPress);
}


/* Redirects the user to the results page */
function onSearchButtonPress(){
  location.href = "results.html";
}
