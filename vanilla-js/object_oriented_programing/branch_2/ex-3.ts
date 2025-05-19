// Écris les classes nécessaires au fonctionnement du programme suivant:

interface IVirus {
  firstAppearence(): string
  contagiousness(): string
  mutations(): string
  detection(): string
}

class Coronavirus {
    constructor(public variant: string) {}
    
    affiche(): void {
      console.log(`Variant: ${this.variant}`);
    }
}
  
class Alpha extends Coronavirus {
  constructor(
    public variant: string
  ){
    super(variant)
  }

  firstAppearence() {
    console.log(`${this.variant} was discovered in the United Kingdom on september 2020`);  
  }

  contagiouness() {
    console.log(`${this.variant} is 50-70% more contagious than the original strain`);
    
  }

  mutation() {
    console.log('Mutation N501Y (improves afinity for ACE2 receptors) P681H');
  }
}

class Beta extends Coronavirus {
  constructor(
    public variant: string
  ){
    super(variant)
  }

  firstAppearence() {
    console.log(`${this.variant} was discovered in South Africa in May 2020`);  
  }

  contagiouness() {
    console.log(`${this.variant} is more contagious than the original strain but less than Delta`);
    
  }

  mutation() {
    console.log('Mutation N501Y, E484K (imunitary evasion) K417N');
  }
}

class Gamma extends Coronavirus {
  constructor(
    public variant: string
  ){
    super(variant)
  }

  firstAppearence() {
    console.log(`${this.variant} was discovered in Brasil in november 2020`);  
  }

  contagiouness() {
    console.log(`${this.variant} is more contagious than the original strain but less than Delta`);
    
  }

  mutation() {
    console.log('Mutation N501Y E484K, K417T (similar to Beta)');
  }
}

class Delta extends Coronavirus {
  constructor(
    public variant: string
  ){
    super(variant)
  }

  firstAppearence() {
    console.log(`${this.variant} was discovered in India in October 2020`);  
  }

  contagiouness() {
    console.log(`${this.variant} is 60% more than Alpha, strong spraidness`);
    
  }

  mutation() {
    console.log('Mutations L452R (infectiosity improved), P681R');
  }
}

class Omicron extends Coronavirus {
  constructor(
    public variant: string
  ){
    super(variant)
  }

  firstAppearence() {
    console.log(`${this.variant} was discovered in South Africa, November 2021`);  
  }

  contagiouness() {
    console.log(`${this.variant} 2-4 times more contagious than delta`);
    
  }

  mutation() {
    console.log('30+ mutations on spike proteine (N501Y, E484A, K417N, etc.)');
  }
}
  
const coronavirusList: Coronavirus[] = [];
  
coronavirusList.push(new Beta("B.1.351"));
coronavirusList.push(new Gamma("P.1"));
coronavirusList.push(new Omicron("B.1.1.529"));
coronavirusList.push(new Gamma("P.1"));
coronavirusList.push(new Delta("B.1.617.2"));
coronavirusList.push(new Omicron("B.1.1.529"));
coronavirusList.push(new Alpha("B.1.1.7"));
coronavirusList.push(new Omicron("B.1.1.529"));
coronavirusList.push(new Alpha("B.1.1.7"));

coronavirusList.forEach(element => {
  //element.affiche();
  element.firstAppearence();
  element.contagiouness();
  element.mutation();
  console.log('*********************************************************');
  
});

  
