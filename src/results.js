window.onload = initialize;


function initialize() {
    document.getElementById('back-button').addEventListener('click', onBackButtonPress);
    queryNPI();
}

let answer;
const queryNPI = () => {
    const queryURL = "https://npiregistry.cms.hhs.gov/api/" + window.location.search;
    /* Getting around improperly set CORS policy by npiregistry using a proxy */
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(queryURL)}`)
        .then(response => response.json())
        .then(data => {
            /* Clean up proxied data and convert it to a JSON object */
            answer = JSON.parse(data.contents.replace('\\', ''))
            console.log(answer);
        })
        .then(() => createCards());
    ;
}

const createCards = () => {
    const container = document.getElementById("results_container");
    const newCards = answer.results.reduce(reducer, '');
    container.innerHTML += newCards;
}

/* Redirects the user to the search page */
let onBackButtonPress = () => location.href = "index.html";

const reducer = (addedCards, individual) => {
    let prefix = individual.basic.hasOwnProperty('name_prefix') ? individual.basic.name_prefix + ' ' : ''
    let name = `${prefix}${individual.basic.first_name} ${individual.basic.last_name}`.toLocaleLowerCase()
        .replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
    let addresses = [];
    individual.practiceLocations.forEach((element) => addresses.push(`${element.address_1}, ${element.city}, ${element.state}, ${element.postal_code}`));
    taxonomies = '';
    individual.taxonomies.forEach((element, index) => taxonomies += `<li class="taxonomies ${index + 1}">${element.desc} - ${element.state}</li>`);
    return addedCards +
        `<div class="card">
        <h2 class="name">${name}</h2 >
        <h3 class="credentials">Credentials: ${individual.basic.credential}</h3>
        <h3 class="gender">Gender: ${individual.basic.gender}</h3>
        <h3 class="location">Location: ${addresses.join(', ')}</h3>
        <ul><h3 class="TaxonomiesTitle">Taxonomies</h3>
            ${taxonomies}
        </ul>
        <h4 class="lastUpdated">Last Updated: ${individual.basic.last_updated}</h4>
        <button type="button" class="reviews"><a href="review.html?name=${name}&number=${individual.number}">See Reviews</a></button>
    </div > `;
};
