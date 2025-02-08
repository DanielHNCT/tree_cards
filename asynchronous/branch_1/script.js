// Exercice 1 et 2
const body = document.querySelector('body');
body.style.backgroundColor = 'black'

const container = document.getElementById('container');
const button = document.createElement('button');
container.appendChild(button);
button.style.fontSize = '50px';
button.innerText = 'click here for a new joke';

const joke_container = document.createElement('h1');
container.appendChild(joke_container);
joke_container.style.color = 'red'

const loadingMessage = document.createElement('h2');
loadingMessage.innerText = 'Loading jokes...';
loadingMessage.style.fontSize = '30px';
loadingMessage.style.color = 'white';
container.appendChild(loadingMessage);
loadingMessage.style.display = 'none';

async function fetchJokes() {
  loadingMessage.style.display = 'block';
  const response = await fetch('https://api.chucknorris.io/jokes/random');
  const jokes = await response.json();
  loadingMessage.style.display = 'none'
  joke_container.innerText = jokes.value;
  console.log(jokes.value);
}

button.addEventListener('click', () => {
  joke_container.innerText = ''
  fetchJokes();
});







/*const body = document.querySelector('body');
body.style.backgroundColor = "black"*/
/*async function fetchOffers() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const offers = await response.json();
  
  const contcainer = document.getElementById("container");

  const html = `
      <h2>${offers.name.toUpperCase()}</h2>
      <img src="${offers.sprites.front_default}" alt="${offers.name}">
      <p><strong>Type:</strong> ${offers.types.map(t => t.type.name).join(", ")}</p>
      <ul>
          <strong>Stats:</strong>
          ${offers.stats.map(stat => `<li>${stat.stat.name}: ${stat.base_stat}</li>`).join("")}
      </ul>
  `;

  container.innerHTML = html;
}

fetchOffers();*/