class Film {
    constructor (title, released, realisator, category) {
        this.title = title;
        this.released = released;
        this.realisator = realisator;
        this.category = category;
    }
    displayInfo() {
        console.log(`Le film ${this.title} est sorti en ${this.released} et est réalisé par ${this.realisator}`);
        
    }
}

class Realisator {
    constructor (fullName, name, birthYear) {
        this.fullName = fullName;
        this.name = name;
        this.birthYear = birthYear;
    }
}

const director1 = new Realisator('Terry', 'Gilliam', 1940);
const director2 = new Realisator('Jonas', 'åkerlund', 1966);
const director3 = new Realisator('Quentin', 'Tarantino', 1963);
const director4 = new Realisator('Alfonso', 'Cuarón', 1940);
const film1 = new Film('Las Vegas Parano', '22/05/1998', 'Terry Gilliam');
const film2 = new Film('Spun', '14/06/2002', 'Jonas Åkerlund');
const film3 = new Film('Pulp Fiction', '14/10/1994', 'Quentin Tarantino');
const film4 = new Film('Gravity', '04/10/2013', 'Alfonso Cuarón');
