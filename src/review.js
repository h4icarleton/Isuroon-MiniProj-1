const initialize = () => {
    const href_string = window.location.href;
    const url = new URL(href_string);
    const doctors_name = url.searchParams.get("name");
    document.getElementById('doctor').innerHTML = doctors_name + ":";
    createReviewCards();
};

window.onload = initialize;

// RESULTS PAGE SCRIPTS
let reviews = [
    { name: 'John Doe: ', date: '11/05/2019', review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis est quis quaerat neque distinctio illo incidunt cum repellendus, esse iusto necessitatibus, nesciunt aperiam obcaecati perspiciatis eligendi dolor voluptates corporis! Quaerat! Molestias culpa itaque repellendus totam fugiat ratione quisquam voluptatem, esse atque autem eligendi. Dolor vitae doloremque facilis beatae, expedita voluptate illo nobis nam eius repellat dolorum, cum minus, itaque quaerat? Natus ad quo, dolorum esse assumenda tempore mollitia, reprehenderit quos porro nobis quaerat est modi omnis asperiores praesentium nam ipsam quis totam voluptatibus facilis culpa deserunt enim? Ratione, sint hic! Dolores, ipsa accusantium animi ad commodi nemo repellat sit? Aut doloremque itaque minima dolore porro error repudiandae perspiciatis fugit, deleniti voluptatibus at consectetur sunt saepe nesciunt repellat voluptatem! Eum, repellat? Delectus ad numquam saepe omnis ipsa odit culpa eos deserunt reprehenderit aspernatur aut, illo est? Maiores praesentium ab enim ullam ad modi laudantium soluta delectus est, libero numquam saepe molestiae.' },
    { name: 'Anonymous: ', date: '04/21/2018', review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis est quis quaerat neque distinctio illo incidunt cum repellendus, esse iusto necessitatibus, nesciunt aperiam obcaecati perspiciatis eligendi dolor voluptates corporis! Quaerat! Molestias culpa itaque repellendus totam fugiat ratione quisquam voluptatem, esse atque autem eligendi. Dolor vitae doloremque facilis beatae, expedita voluptate illo nobis nam eius repellat dolorum, cum minus, itaque quaerat? Natus ad quo, dolorum esse assumenda tempore mollitia, reprehenderit quos porro nobis quaerat est modi omnis asperiores praesentium nam ipsam quis totam voluptatibus facilis culpa deserunt enim? Ratione, sint hic! Dolores, ipsa accusantium animi ad commodi nemo repellat sit? Aut doloremque itaque minima dolore porro error repudiandae perspiciatis fugit, deleniti voluptatibus at consectetur sunt saepe nesciunt repellat voluptatem! Eum, repellat? Delectus ad numquam saepe omnis ipsa odit culpa eos deserunt reprehenderit aspernatur aut, illo est? Maiores praesentium ab enim ullam ad modi laudantium soluta delectus est, libero numquam saepe molestiae.' },
    { name: 'Jane Doe: ', date: '12/23/2021', review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis est quis quaerat neque distinctio illo incidunt cum repellendus, esse iusto necessitatibus, nesciunt aperiam obcaecati perspiciatis eligendi dolor voluptates corporis! Quaerat! Molestias culpa itaque repellendus totam fugiat ratione quisquam voluptatem, esse atque autem eligendi. Dolor vitae doloremque facilis beatae, expedita voluptate illo nobis nam eius repellat dolorum, cum minus, itaque quaerat? Natus ad quo, dolorum esse assumenda tempore mollitia, reprehenderit quos porro nobis quaerat est modi omnis asperiores praesentium nam ipsam quis totam voluptatibus facilis culpa deserunt enim? Ratione, sint hic! Dolores, ipsa accusantium animi ad commodi nemo repellat sit? Aut doloremque itaque minima dolore porro error repudiandae perspiciatis fugit, deleniti voluptatibus at consectetur sunt saepe nesciunt repellat voluptatem! Eum, repellat? Delectus ad numquam saepe omnis ipsa odit culpa eos deserunt reprehenderit aspernatur aut, illo est? Maiores praesentium ab enim ullam ad modi laudantium soluta delectus est, libero numquam saepe molestiae.' }
]; // Query/format doctor information into this variable here


let createReviewCards = () => {
    var container = document.getElementById("review_container");
    let newReviews = reviews.reduce(reducer, '')
    container.innerHTML = newReviews;
}

const reducer = (addedCards, { name, date, review }) => addedCards +
    `<div class="review">
        <h2 class="nameanddate">${name}${date}</h3>
        <h2 class="details">${review}</h3>
    </div><br>`;