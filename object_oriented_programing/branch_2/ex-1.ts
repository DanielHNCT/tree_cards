interface ITest {
    displayInfo(): void;
}

class Spaceship implements ITest {
    constructor(
        public nom : string,
        public modele : string,
        public taille : number
    ){}
    
    displayInfo(): void {
        console.log(`Le vaisseau: ${this.nom}, de modèle: ${this.modele}`);
    }
}

class Cruiser extends Spaceship {
    constructor(
        public nom : string,
        public modele : string,
        public taille : number, 
        public nombreDeCanon : number, 
        public capacite : number 
    ){
        super(nom, modele, taille);
    }

    displayInfo(): void {
        console.log(`${this.nom} has height: ${this.taille}, with ${this.nombreDeCanon} cannons and a capacity of ${this.capacite}`);
    }

    reload(): void {
        console.log(`Cruiser is reloading !`)
    }
    
    deploymentTroops(): void {
        const troopsDeployed = Math.floor(Math.random() * this.capacite);
        console.log(`deploying ${troopsDeployed} troops !`)
    }
}

class Interceptor extends Spaceship {
    constructor(
        public nom : string,
        public modele : string,
        public taille : number, 
        public nombreDeCanon : number, 
        public capacite : number 
    ){
        super(nom, modele, taille)
    }

    displayInfo(): void {
        console.log(`${this.nom} has height: ${this.taille}, with ${this.nombreDeCanon} cannons and a capacity of ${this.capacite}`);
    }

    fire(): undefined {
        console.log(`Interceptor is firing !`);
        return
    }

    relaod(): void {
        console.log(`Interceptor is reloading !`)
    }

    test(): void {
        const ammu = 1000;
        for (let i = 0; i < ammu; i++) {
            this.fire();
            this.fire();
            this.relaod();            
        }
    }
}

const Acclamator = new Spaceship ('Acclamator', 'Cruiser', 752);
const CorvetteCorllinne = new Cruiser('Acclamator', 'Cruiser', 752, 0, 165);
const spaceshipTest = new Interceptor('X-wing', 'Interceptor', 12.5, 2, 0);
spaceshipTest.test();
// CorvetteCorllinne.deploymentTroops();
// Acclamator.displayInfo();
// console.log(Acclamator);
// console.log(CorvetteCorllinne);