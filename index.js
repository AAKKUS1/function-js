//exo1
//
//function addition(a, b) {
 //   return (a + b);
//}
//console.log(addition(2, 3)); 
//
//exo2
//function salutation(nom) {
// return ("Bonjour, " + nom)
//}
//console.log(salutation("Alice"));
//
//exo3
//
//function estPair(nombre) {
 //   return (nombre % 2  ===0)
//}
//console.log(estPair(4)); 
//console.log(estPair(7));
//
//exo4
//
//function aireRectangle(longueur, largeur) {
 //   return (longueur * largeur)
//}
//console.log(aireRectangle(5, 3));
//
//exo5
//
//function estMajuscule(chaine) {
//return chaine === chaine.toUpperCase();
//}
//console.log(estMajuscule("HELLO"));
//console.log(estMajuscule("Hello"));
//
//exo6
//
//function maxDeuxNombres(a, b) {
  //  return Math.max(a, b);
//}
//console.log(maxDeuxNombres(5, 10));
//
//exo7
//
//function difference(a, b) {
 //   return(a - b)
//}
//console.log(difference(10, 3));
//
//exo8
//
//function convertirEnCelsius(fahrenheit) {
// return ((fahrenheit - 32) * (5/9))
//}
//console.log(convertirEnCelsius(100));
//
//exo9
//
//function estMajeur(age) {
 //return age >= 18;
//}
//console.log(estMajeur(18));
//console.log(estMajeur(16));
//
//exo10
// 
//function maxTroisNombres(a, b, c) {
//    return Math.max (a, b, c)
//}
//console.log(maxTroisNombres(3, 7, 5));
//
//exo11
//
//function calculer(a, b, operation) {
 //   return operation(a, b)
//}

//function addition(x, y) {
  //return x + y
//}

//function multiplication(x, y) {
  //return x * y
//}

//console.log(calculer(5, 3, addition));
//console.log(calculer(5, 3, multiplication));
//
//exo supll
//
//
////exo1
  //function sumTwoNumbers(a, b) {
  //return a + b;
//}
//console.log(sumTwoNumbers(5, 8));
//
//exo2
//
//function concatenateStrings(str1, str2) {
//  return str1 + str2;
//}
//console.log(concatenateStrings("foot", "ball"));
//
//exo3
//
//function isEven(n) {
  //return n % 2 === 0;
//}
//console.log(isEven(3))
//console.log(isEven(4))
//
//exo4
//
//function rectangleArea(widht, height) {
 // return widht * height;
//}
//console.log(rectangleArea(10, 8))
//function isAdult(age) {
  //return age >= 18;
//}
//console.log(isAdult(18));
//
//exo6
//
//function isPositive(n) {
//  return n >= 0;
//}
//console.log(isPositive(1))
//
//exo7
//
//function minTwoNumbers(a, b) {
 // return Math.min (a, b)
//}
//console.log(minTwoNumbers(3, 7));
//
//exo8
//
//jsp
//
//exo9
//
//function maxThreeNumbers(a, b, c) {
 // return Math.max (a, b, c)
//}
//console.log(maxThreeNumbers(2, 10, 5));
//
//exo10
//
//function multiplyTwoNumbers(a, b) {
 // return a * b
//}
//console.log(multiplyTwoNumbers(5, 2))
//
/**
* Calcule le montant total après application d'une remise.
*
* @param {number} montantInitial - Le montant initial avant remise.
* @param {string} typeRemise - Le type de remise appliquée ("etudiant", "soldes", "fidélité", "aucune").
* @returns {number} - Le montant total après application de la remise.
*/
function calculerMontantTotal(montantInitial, typeRemise) {
  const etudiant=15;
  const soldes=20;
  const aucune=0;
  const fidelité=10;

  if (typeRemise == "etudiant") {
  typeRemise = etudiant;
    let formule = typeRemise * montantInitial / 100;
    let result =montantInitial - formule;
    console.log(result);
  }
  else if (typeRemise == "soldes") {
    typeRemise = soldes;
      let formule = typeRemise * montantInitial / 100;
      let result =montantInitial - formule;
      console.log(result);
    }
    else if (typeRemise == "fidelité") {
      typeRemise = fidelité;
        let formule = typeRemise * montantInitial / 100;
        let result =montantInitial - formule;
        console.log(result);
      }
      else if (typeRemise == "aucune")
  {
    let result = montantInitial;
    console.log(result);
    
  }
  else if (typeRemise != "aucune" && typeRemise != "fidelité" && typeRemise != "soldes" && typeRemise != "étudiant")
  {
    let result ="Type de remise inconnu.";
    console.log(result);
    
  }
}

calculerMontantTotal(100, "etudiant"); 
calculerMontantTotal(200, "soldes"); 
calculerMontantTotal(150, "fidelité");
calculerMontantTotal(100, "inconnu");
calculerMontantTotal(50, "aucune");