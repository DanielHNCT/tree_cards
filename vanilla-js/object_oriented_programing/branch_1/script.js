;
// const Category = {
//     FICTIONELLE: 'Fictionelle',
//     DOCUMENTAIRE: 'Documentaire',
//     PSYCHOLOGIQUE: 'Psychologique'
//   } as const;
// type CategoryType = typeof Category[keyof typeof Category];
class Film {
    title;
    year;
    realisator;
    category;
    age;
    constructor(title, year, realisator, category, 
    // public category: CategoryType,
    age = 0) {
        this.title = title;
        this.year = year;
        this.realisator = realisator;
        this.category = category;
        this.age = age;
    }
    showFilm() {
        console.log(`Le film ${this.title}  est sorti en ${this.year} et est réalisé par ${this.realisator} et de genre ${this.category}`);
    }
}
class Realisator {
    name;
    fullname;
    birthdate;
    age;
    constructor(name, fullname, birthdate, age = 0) {
        this.name = name;
        this.fullname = fullname;
        this.birthdate = birthdate;
        this.age = age;
        this.name = name;
        this.fullname = fullname;
        this.birthdate = birthdate;
        this.age = new Date().getFullYear() - this.birthdate;
    }
}
class Client {
    name;
    fullname;
    films;
    constructor(name, fullname, films) {
        this.name = name;
        this.fullname = fullname;
        this.films = films;
        this.name = name;
        this.fullname = fullname;
        this.films = films;
    }
    addMovie(film) {
        return this.films.push(film);
    }
}
const film1 = new Film('Avatar', 2015, 'realisator1', "Fictionelle" /* Category.FICTIONELLE */);
const film2 = new Film('Pulp Fiction', 2015, 'Quentin Tarantino', "Fictionelle" /* Category.FICTIONELLE */);
const film3 = new Film('Orange Mecanique', 1972, 'Stanley Kubrick', "Psychologique" /* Category.PSYCHOLOGIQUE */);
const realisator = new Realisator('Quentin', 'Tarantino', 1963);
const client1 = new Client('Ange', 'Nono', [film1]);
// client1.addMovie(film2.title)
console.log(client1);
film1.showFilm();
film2.showFilm();
export {};
