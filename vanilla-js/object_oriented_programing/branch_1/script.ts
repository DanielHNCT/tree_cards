const enum Category {
    FICTIONELLE = 'Fictionelle',
    DOCUMENTAIRE = 'Documentaire',
    PSYCHOLOGIQUE = 'Psychologique'
};

// const Category = {
//     FICTIONELLE: 'Fictionelle',
//     DOCUMENTAIRE: 'Documentaire',
//     PSYCHOLOGIQUE: 'Psychologique'
//   } as const;
  
// type CategoryType = typeof Category[keyof typeof Category];

class Film {
    constructor (
        public title: string, 
        public year: number, 
        public realisator: string, 
        public category: Category,
        // public category: CategoryType,

        public age: number = 0){
        
    }

    showFilm(){
        console.log(`Le film ${this.title}  est sorti en ${this.year} et est réalisé par ${this.realisator} et de genre ${this.category}`);
    }
}

class Realisator {
    constructor(
        public name: string, 
        public fullname: string, 
        public birthdate: number,
        public age: number = 0){
        this.name = name;
        this.fullname = fullname;
        this.birthdate = birthdate;
        this.age = new Date().getFullYear() - this.birthdate;
    }

}

class Client {
    constructor(
        public name: string, 
        public fullname: string,
        public films: (Film | string)[]
    ){
        this.name = name;
        this.fullname = fullname;
        this.films = films;
    }
    addMovie(film: Film){
        return this.films.push(film);
    }


}

const film1 = new Film ('Avatar', 2015, 'realisator1', Category.FICTIONELLE);
const film2 = new Film ('Pulp Fiction', 2015, 'Quentin Tarantino', Category.FICTIONELLE);
const film3 = new Film ('Orange Mecanique', 1972, 'Stanley Kubrick', Category.PSYCHOLOGIQUE);
const realisator = new Realisator('Quentin', 'Tarantino', 1963);
const client1 = new Client ('Ange', 'Nono', [film1]);
// client1.addMovie(film2.title)

console.log(client1);
film1.showFilm();
film2.showFilm();
