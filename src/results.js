window.onload = initialize;


function initialize() {
  document.getElementById('back-button').addEventListener('click', onBackButtonPress);
}


/* Redirects the user to the search page */
function onBackButtonPress(){
  location.href = "index.html";
}
