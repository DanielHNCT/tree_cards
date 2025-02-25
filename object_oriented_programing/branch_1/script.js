var Category;
(function (Category) {
    Category["FICTIONELLE"] = "Fictionelle";
    Category["DOCUMENTAIRE"] = "Documentaire";
    Category["PSCHOLOGIQUE"] = "Psychologique";
})(Category || (Category = {}));
;
var Film = /** @class */ (function () {
    function Film(title, year, realisator, category, age) {
        if (age === void 0) { age = 0; }
        this.title = title;
        this.year = year;
        this.realisator = realisator;
        this.category = category;
        this.age = age;
        this.title = title;
        this.year = year;
        this.realisator = realisator;
        this.category = category;
    }
    Film.prototype.showFilm = function () {
        console.log("Le film ".concat(this.title, "  est sorti en ").concat(this.year, " et est r\u00E9alis\u00E9 par ").concat(this.realisator, " et de genre ").concat(this.category));
    };
    return Film;
}());
var Realisator = /** @class */ (function () {
    function Realisator(name, fullname, birthdate, age) {
        if (age === void 0) { age = 0; }
        this.name = name;
        this.fullname = fullname;
        this.birthdate = birthdate;
        this.age = age;
        this.name = name;
        this.fullname = fullname;
        this.birthdate = birthdate;
        this.age = new Date().getFullYear() - this.birthdate;
    }
    return Realisator;
}());
var Client = /** @class */ (function () {
    function Client(name, fullname, films) {
        this.name = name;
        this.fullname = fullname;
        this.films = films;
        this.name = name;
        this.fullname = fullname;
        this.films = films;
    }
    Client.prototype.addMovie = function (film) {
        return this.films.push(film);
    };
    return Client;
}());
var film1 = new Film('Avatar', 2015, 'realisator1', Category.FICTIONELLE);
var film2 = new Film('Pulp Fiction', 2015, 'Quentin Tarantino', Category.FICTIONELLE);
var film3 = new Film('Orange Mecanique', 1972, 'Stanley Kubrick', Category.PSCHOLOGIQUE);
var realisator = new Realisator('Quentin', 'Tarantino', 1963);
var client1 = new Client('Ange', 'Nono', [film1]);
// client1.addMovie(film2.title)
console.log(client1);
film1.showFilm();
film2.showFilm();
