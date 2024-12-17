/*const firstFunction = (intNumber) => {
    return intNumber * intNumber
};
let result = firstFunction(3);
//console.log(result);

const secondFunction = (param1, param2) => {
    return param1 * param2
};*/
//console.log(secondFunction(result, 10));

const askNumber = prompt("veuillez inscrire un nombre :");
const userNumber = askNumber;
const firstFunction = (param1) => {
    return param1 * 3
}
let multipliedNumber = firstFunction(userNumber);
console.log(firstFunction(userNumber));

const secondFunction = (param1) => {
    return param1 * 10
}
console.log(secondFunction(multipliedNumber));
//console.log(secondFunction(userNumber, multipliedNumber))
//console.log(userNumber);


// autre manière de calculer le carré :
/*const secondFunction = (nombre, carre) => {
    return nombre ** carre
};
console.log(secondFunction(2, 2))*/





