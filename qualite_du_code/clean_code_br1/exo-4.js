const dataContainer = document.getElementById('data-container');
const BASE_URL = 'https://api.open-meteo.com/v1/forecast'
const villes = [
    {
        name: 'paris',
        ltd: 48.8534,
        lng: 2.3488
    },
    {
        name: 'lyon',
        ltd: 45.75,
        lng: 4.85
    },
    {
        name: 'nantes',
        ltd: 47.2173,
        lng: -1.5534
    },
    {
        name: 'marseilles',
        ltd: 43.3,
        lng: 5.4
    },
    {
        name: 'lille',
        ltd: 50.633333,
        lng: 3.066667
    }
]


const fetchWeather = async () => {
    try {
        for (let element in villes) {
            let url;
            url = `${BASE_URL}?latitude=${villes[element].ltd}&longitude=${villes[element].lng}&current=temperature_2m,rain`;
            const response = await fetch(url);
            if (!response.ok) {
                console.log(`ERREUR API ${response}`);
            }
            const data = await response.json();
            console.log(data.current.temperature_2m)
            /*for (let element in data) {
                dataContainer.innerHTML += 
                `
                    <p>${element.current.time}</>
                `
            }*/
        }
    } catch (error) {
        console.error(error)
    }
}
fetchWeather()


const fetchWeatherTest = async (city) => {
    try {
        let url;

        if (city === 'paris') {
            url = `${BASE_URL}?latitude=${villes[0].ltd}&longitude=${villes[0].lng}&current=temperature_2m,rain`
        } else if (city === 'lyon') {
            url = `${BASE_URL}?latitude=${villes[1].ltd}&longitude=${villes[1].lng}&current=temperature_2m,rain`
        } else if (city === 'nantes') {
            url = `${BASE_URL}?latitude=${villes[2].ltd}&longitude=${villes[2].lng}&current=temperature_2m,rain`
        } else if (city === 'marseilles') {
            url = `${BASE_URL}?latitude=${villes[3].ltd}&longitude=${villes[3].lng}&current=temperature_2m,rain`
        } else if (city === 'lille') {
            url = `${BASE_URL}?latitude=${villes[4].ltd}&longitude=${villes[4].lng}&current=temperature_2m,rain`
        }
        const response = await fetch(url);
        if (!response.ok) {
            console.log(`ERREUR API ${response}`)
        }
        const data = await response.json();
        dataContainer.innerHTML = 
        `
            <p>${data.current.time}</p>
        `
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}

//fetchWeatherTest('nantes')




