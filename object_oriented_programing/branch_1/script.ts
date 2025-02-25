enum Category {
    FICTIONELLE = 'Fictionelle',
    DOCUMENTAIRE = 'Documentaire',
    PSCHOLOGIQUE = 'Psychologique'
};

class Film {
    constructor (
        public title : string, 
        public year : number, 
        public realisator : string, 
        public category: Category,
        public age: number = 0){
        this.title = title ;
        this.year = year;
        this.realisator = realisator;
        this.category = category;
    }

    showFilm(){
        console.log(`Le film ${this.title}  est sorti en ${this.year} et est réalisé par ${this.realisator} et de genre ${this.category}`);
    }
}

class Realisator{
    constructor(
        public name : string, 
        public fullname : string, 
        public birthdate : number,
        public age: number = 0){
        this.name = name;
        this.fullname = fullname;
        this.birthdate = birthdate;
        this.age = new Date().getFullYear() - this.birthdate;
    }

}

class Client {
    constructor(
        public name : string, 
        public fullname : string,
        public films : any[]
    ){
        this.name = name;
        this.fullname = fullname;
        this.films = films;
    }
    addMovie(film){
        return this.films.push(film);
    }


}

const film1 = new Film ('Avatar', 2015, 'realisator1', Category.FICTIONELLE);
const film2 = new Film ('Pulp Fiction', 2015, 'Quentin Tarantino', Category.FICTIONELLE);
const film3 = new Film ('Orange Mecanique', 1972, 'Stanley Kubrick', Category.PSCHOLOGIQUE);
const realisator = new Realisator('Quentin', 'Tarantino', 1963);
const client1 = new Client ('Ange', 'Nono', [film1]);
// client1.addMovie(film2.title)

console.log(client1);
film1.showFilm();
film2.showFilm();
