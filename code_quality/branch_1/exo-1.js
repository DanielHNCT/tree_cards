const sum = (array) => {
    let number = 0;
    for (let element in array) {
        number += array[element];
    }
    return number;
};



/*
function f1(arr) {
	let n = 0;
	for (let i = 0; i < arr.length; i++) {
		n += arr[i];
	}
	return number;
}

const sumTest = (array) => {
    let i = 0;
    let number = 0;
    while (i < array.length) {
        number += array[i];
        i++
    }
    return number
}





console.log(sum([1, 2, 3, 4])); // Devrait retourner 10
console.log(sum([1, 2])); // Devrait retourner 3
console.log(sum([0])); // Devrait retourner 0
console.log(sum([1, 0])) // Devrait retourner 1






const tableau = [1, 2, 3, 4];
let numero = 0;

for (let i = 0; i < tableau.length; i++) {
    numero += tableau[i]
    //console.log(tableau[i])
    //console.log(numero)
}

console.log(numero);
return numero;*/




