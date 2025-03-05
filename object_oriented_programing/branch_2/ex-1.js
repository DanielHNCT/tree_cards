class Spaceship {
    nom;
    modele;
    taille;
    constructor(nom, modele, taille) {
        this.nom = nom;
        this.modele = modele;
        this.taille = taille;
    }
    displayInfo() {
        console.log(`Le vaisseau: ${this.nom}, de modèle: ${this.modele}`);
    }
}
class Cruiser extends Spaceship {
    nom;
    modele;
    taille;
    nombreDeCanon;
    capacite;
    constructor(nom, modele, taille, nombreDeCanon, capacite) {
        super(nom, modele, taille);
        this.nom = nom;
        this.modele = modele;
        this.taille = taille;
        this.nombreDeCanon = nombreDeCanon;
        this.capacite = capacite;
    }
    displayInfo() {
        console.log(`${this.nom} has height: ${this.taille}, with ${this.nombreDeCanon} cannons and a capacity of ${this.capacite}`);
    }
    reload() {
        console.log(`Cruiser is reloading !`);
    }
    deploymentTroops() {
        const troopsDeployed = Math.floor(Math.random() * this.capacite);
        console.log(`deploying ${troopsDeployed} troops !`);
    }
}
class Interceptor extends Spaceship {
    nom;
    modele;
    taille;
    nombreDeCanon;
    capacite;
    constructor(nom, modele, taille, nombreDeCanon, capacite) {
        super(nom, modele, taille);
        this.nom = nom;
        this.modele = modele;
        this.taille = taille;
        this.nombreDeCanon = nombreDeCanon;
        this.capacite = capacite;
    }
    displayInfo() {
        console.log(`${this.nom} has height: ${this.taille}, with ${this.nombreDeCanon} cannons and a capacity of ${this.capacite}`);
    }
    fire() {
        console.log(`Interceptor is firing !`);
        return;
    }
    relaod() {
        console.log(`Interceptor is reloading !`);
    }
    test() {
        const ammu = 1000;
        for (let i = 0; i < ammu; i++) {
            this.fire();
            this.fire();
            this.relaod();
        }
    }
}
const Acclamator = new Spaceship('Acclamator', 'Cruiser', 752);
const CorvetteCorllinne = new Cruiser('Acclamator', 'Cruiser', 752, 0, 165);
const spaceshipTest = new Interceptor('X-wing', 'Interceptor', 12.5, 2, 0);
spaceshipTest.test();
export {};
// CorvetteCorllinne.deploymentTroops();
// Acclamator.displayInfo();
// console.log(Acclamator);
// console.log(CorvetteCorllinne);
