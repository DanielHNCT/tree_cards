/*async function fetchOffers1() {
    const response = await fetch('https://codepassport.dev/api/offers'); // on appelle fetch avec une URL d'API
    console.log(response); // affiche la promesse retournée par fetch
}
fetchOffers1();*/

async function fetchOffers2() {
    const response = await fetch('https://jsonplaceholder.org/comments'); // on appelle fetch avec une URL d'API
    const offers = await response.json();
    console.log(offers); // affiche la promesse retournée par fetch
}
fetchOffers2();



