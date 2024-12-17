const optionsContainer = document.getElementById("options-container");
const random_button = document.getElementById('random-button');
const toggle = document.getElementById('toggle');

const joke_container = document.getElementById('joke-container')
const display = document.createElement('h1');
joke_container.appendChild(display)


async function fetchRandomJokes() {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const jokes = await response.json();
    display.innerText = jokes.value 
    console.log(jokes.value);
}

async function fetchCategories() {
    const response = await fetch('https://api.chucknorris.io/jokes/categories')
    const categories = await response.json();
    //display.innerText = categories
    console.log(categories)

    categories.forEach(element => {
    const bouton_categories = document.createElement('button')
    categoriesButton.appendChild(bouton_categories)
    categoriesButton.textContent = element
    });
}



random_button.addEventListener('click', () => {
    display.innerText = ''
    fetchRandomJokes();
});



const eraseButton = document.getElementById('erase-button');
eraseButton.addEventListener('click', () => {
    display.innerText = ''
});

const categoriesButton = document.getElementById('categories-button');
categoriesButton.addEventListener('click', () => {
    fetchCategories();
})

const toggleButton = document.getElementById("toggle-button");
toggleButton.addEventListener("click", () => {
    const isHidden = optionsContainer.style.display === "none" || optionsContainer.style.display === "";
    if (isHidden) {
        optionsContainer.style.display = "block"; // Affiche les options
        toggleButton.innerText = "Masquer les options"; // Change le texte du bouton
    } else {
        optionsContainer.style.display = "none"; // Masque les options
        toggleButton.innerText = "Afficher les options"; // Réinitialise le texte du bouton
    }
});
