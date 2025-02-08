const genUserReport = (name, age, city, occupation, isSubscribed) => {
  const status = isSubscribed ? 'Abonné' : 'Non abonné';
  const category =
    age < 18
      ? `Jeune\n`
      : age >= 18 && age < 60
      ? `Adulte\n`
      : `Senior\n`;

  let report =
    `
    Rapport utilisateur :\n
    Nom : ${name}\n
    Age : ${age} ans\n
    Ville ${city}\n
    Profession : ${occupation}\n
    Statut : ${status}\n
    Catégorie : ${category}
    `;
  return report;
}
genUserReport('Daniel', '22', 'Bezons', 'Étudiant', true)

function genererRapportUtilisateur(nom, age, ville, profession, estAbonne) {
    let rapport = "Rapport utilisateur :\n";
    rapport += "Nom : " + nom + "\n";
    rapport += "Age : " + age + " ans\n";
    rapport += "Ville : " + ville + "\n";
    rapport += "Profession : " + profession + "\n";
    if (estAbonne == true) {
      rapport += "Statut : Abonné\n";
    } else {
      rapport += "Statut : Non abonné\n";
    }
    if (age < 18) {
      rapport += "Catégorie : Jeune\n";
    } else if (age >= 18 && age < 60) {
      rapport += "Catégorie : Adulte\n";
    } else {
      rapport += "Catégorie : Senior\n";
    }
    return rapport;
  }