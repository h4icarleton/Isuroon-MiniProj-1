window.onload = initialize;


function initialize() {
  document.getElementById('back-button').addEventListener('click', onBackButtonPress);
}


/* Redirects the user to the search page */
let onBackButtonPress = () => location.href = "index.html";


// RESULTS PAGE SCRIPTS
let info =[
    {name:'John Doe' , creds:'M.D.', gender:'F', location:'NE', tax1:'pediactrics', tax2:'family medicine', tax3:'chiropractor', lUpdated: Date.now()},
    {name:'John Doe' , creds:'M.D.', gender:'F', location:'NE', tax1:'pediactrics', tax2:'family medicine', tax3:'chiropractor', lUpdated: Date.now()},
    {name:'John Doe' , creds:'M.D.', gender:'F', location:'NE', tax1:'pediactrics', tax2:'family medicine', tax3:'chiropractor', lUpdated: Date.now()}
]; // Query/format doctor information into this variable here


// Not working yet
let createCards= () => {// n = number of cards to create
    var container = document.getElementById("results_container");
    let newCards = info.reduce(reducer, '')
    console.log(newCards);
    container.innerHTML += newCards;
}

const reducer = (addedCards, {name, creds, gender, location, tax1= '',tax2= '',tax3=''}, lUpdated) => addedCards + 
        `<div class="card">` +
        `<h2 class="name">Dr: ${name}</h2>` + 
            `<h3 class="credentials">Credentials: ${creds}</h3>` +
            `<h3 class="gender">Gender: ${gender}</h3>` +
            `<h3 class="location">Location: ${location}</h3>` +
            `<ul><h3 class="TaxonomiesTitle">Taxonomies</h3>` +
                `<li class="taxonomies 1">${tax1}</li>` +
                `<li class="taxonomies 2">${tax2}</li>` +
                `<li class="taxonomies 3">${tax3}</li>` +
            `</ul>` +
            `<h4 class="lastUpdated">Last Updated: ${lUpdated}</h4>` +
            `<button type="button" class="reviews"><a href="review.html">See Reviews</a></button>` +
        `</div>`;