const fs = require('fs');
const filepath = 'data.json';
const content = fs.readFileSync(filepath, {encoding: 'utf8', flag: 'r'});
const data = JSON.parse(content);

console.log(typeof data)

console.log(data[0])

console.log(data.length)

console.log(data[4])
/*
let result1 = 0
for (let i = 0; i < data.length; i++) {
    result1 += data[i].age
    console.log(result1)
}
console.log(result1 / data.length)
*/
let i = 0;
let result2 = 0
do {
    result2 += data[i].age
    //console.log(data[i].age)
    console.log(result2)
    i++
} while (i < data.length)

console.log(result2 / data.length)