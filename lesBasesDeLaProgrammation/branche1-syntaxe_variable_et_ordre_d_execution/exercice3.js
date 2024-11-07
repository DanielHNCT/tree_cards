// Que vaudront chacune des variables 
// firstLanguage, secondLanguage  et thirdLanguage  à la fin du code suivant :
let firstLanguage = "HTML";
let secondLanguage = "PHP";
let thirdLanguage = firstLanguage ;
firstLanguage  = "Javascript";
secondLanguage = firstLanguage ;
/* Result:
Javascript
Html
Html */

// Et dans ce cas-ci :
let firstLanguage  = "HTML";
let secondLanguage  = "PHP";
firstLanguage  = "Javascript";
let thirdLanguage  = firstLanguage ;
secondLanguage  = firstLanguage ;
/* Result:
Javascript
Html
Html */


