/* 
Trouver le chiffre le plus proche d'une valeur de référence 
Si deux valeurs à intervalle = choisir le positif
*/

const array = [12, -5, 8, 5 ]
const ref = 0;
let result = getNearestNumber(array, ref);

function getNearestNumber(array, ref) {
    let nearest = null;

    for (const number of array) { // pour chaque iteration sur mon tableau array
        if(number === ref){ 
            return number;
        }
        if(nearest === null || (Math.abs(ref - nearest) > Math.abs(number - ref))) { 
            // math.abs retourne la valeur absolue (sans le signe)
            nearest = number;
        }
    }
    return checkPositiveAndNeg(array, nearest) ;
}

function checkPositiveAndNeg(array, nearest) {
    return(array.find(number => number === Math.abs(nearest)) ?? nearest);
}