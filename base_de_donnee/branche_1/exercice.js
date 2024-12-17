const candidatesContainer = document.getElementById('candidates-container');
candidatesContainer.style.color = 'white'

const candidates = [

	'Le Filip',
	'Ruby On The Nail',
	'Leona Winter',
	'Lula Strega',
	'Misty Phoenix',
	'Perseo',
	'Norma Bell',
	'Edeha Noire',
	'Magnetica',
	'Afrodite Amour'

];

console.log(candidates[0], candidates[7]);


for (let i = 0; i < candidates.length; i++) {
	console.log(candidates[i])
	candidatesContainer.innerHTML += 
	`
	<li>${candidates[i]}</li>
	`
}

let i = 0
do {
	console.log(candidates[i])
	i++
} while (i < candidates.length)



