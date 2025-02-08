const a = (prenom, age) => {
    if (age >= 18) {
        console.log(`¡ vous pouvez conduire ${prenom} !`);
    }else{
        console.log(`¡ Vous ne pouvez pas conduire ${prenom} !`);
    }
};
a("mathieu", 22);
a("Léa", 15);
a("Jean", 17);