const addition3Numbers = (a, b ,c) =>{
    return a + b + c
};
//let result = addition3Numbers(1,2,3);
console.log(`la résultat de la somme est ` + addition3Numbers(1,2,3));

let a = 10
let b = 54
let c = 99
const addition3NumbersWithArg = (nombre1, nombre2, nombre3) => {
    return nombre1 + nombre2 + nombre3
};
console.log(`Le résultat de la somme est ` + addition3NumbersWithArg(a, b, c));
console.log(`le résultat de la somme est ` + addition3NumbersWithArg(12, 23, 44));
console.log(`le résultat de la somme est ` + addition3NumbersWithArg(23, 34, 89));
console.log(`le résultat de la somme est ` + addition3NumbersWithArg(34, 999, 464225));