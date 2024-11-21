let firstLetters = [ 'A', 'd', 'a', '-', 'T', 'e', 'c', 'h'];
let secondLetters = [ 'A', 'd', 'a', '-', 'S', 'c', 'h', 'o', 'o', 'l'];

let message = "";

for (i = 0; i < firstLetters.length; i++) {
    message += firstLetters[i];
}
console.log(message);


let index = 0
while (index < secondLetters.length) {
    message += secondLetters[index];
    index++;
};
console.log(message);

do {
    console.log(message);
    index++;
} while (secondLetters[index])



