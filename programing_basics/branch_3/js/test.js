/*let numbers = [12, 21, 2, 45, 14, 23, 21, 47, 63, 36]

for (let position = 0; position < numbers.length; position++){
    console.log(numbers[position])
}
console.log(numbers[3]);*/

let numbers = [12,21,2,45,14,23,51,47,63,36]

for(let index = 0; index < 10 ; index ++){
	console.log("Au tour " + index + ", l'élément du tableau est égal à " + numbers[index])
	
	if(numbers[index] % 2 == 0) {
		console.log("Le chiffre est pair !")
	} else {
		console.log("Le chiffre est impair !")
	}
}
