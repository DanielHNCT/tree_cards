const selector = document.querySelector('#counter');
let count = 0;
selector.addEventListener ('click', () => {
    count++;
    selector.innerHTML = `${count} clics !`;
});





