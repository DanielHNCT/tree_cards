const getdiv4 = document.getElementById("#horoscope");

const article = document.createElement('article');
const h2 = document.createElement('h2');
const p = document.createElement('p');

h2.innerText = item.sign;
p.innerText = item.description;

article.appendChild(h2);
article.appendChild(p);
getdiv4.appendChild(article);