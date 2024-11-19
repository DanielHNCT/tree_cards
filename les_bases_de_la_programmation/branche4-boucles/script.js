//Je déclare une première boucle qui va faire parcours i de 1 à 10.
for (let i = 1; i <= 10; i++) {
	// J'ignitialise une ligne string vide que je vais remplir au fur et à mesure
let ligne = ""; 
//Je créé une autre boucle dans la première boucle ! = boucle imbriquée
//Cette boucle va faire parcourir j de 1 à 10
for (let j = 1; j <= 10; j++) {
	// J'ajoute le résultat de la multiplication à la ligne, 
	// avec une tabulation pour l'espacement - le \t
	ligne += (i * j) + "\t";
}
// J'affiche la ligne complète
console.log(ligne); 
}



















/*let numbers = [12,21,2,45,14,23,51,47,63,36]

for(let position = 0; position < 10; position++){
    console.log(numbers[position])
}*/

