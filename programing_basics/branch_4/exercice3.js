const ask = parseInt(prompt("choisis un nombre entre 0 et 10"));
const userChoice = ask;

if (isNaN(userChoice)) {
    alert("Ce n'est pas un nombre, réessaye !");
} else if (userChoice >= 1 && userChoice <= 10) {
    alert("Bravo, tu as choisi un nombre valide !");
} else {
    alert("Le nombre doit être entre 1 et 10 !");
}