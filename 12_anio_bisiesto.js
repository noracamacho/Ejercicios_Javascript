// Reciba un año y te responda si es o no es bisiesto.
import promptSync from 'prompt-sync';
const prompt = promptSync();
let endFunction;

// const leapYear = (year) => {
//     return year % 4 === 0 && (year % 100 != 0 || year % 400 === 0);
// }

const leapYear = (year) => {
    if (year % 4 === 0 && (year % 100 != 0 || year % 400 === 0)) {
        return true
    }
    return false
}

do {
    const year = prompt('Ingresa el año que deseas evaluar: ');
    console.log(`\nEl año ${year} ${leapYear(year) ? '' : 'no '}es año bisiesto.\n`);
    endFunction = prompt('Para continuar presione cualquier tecla, para termina presione 0 o enter ');
    console.log(endFunction);
} while (endFunction != 0);






// if (year % 4 === 0 && (year % 100 != 0 || year % 400 === 0)) {
//     console.log(`\nEl año ${year} es año bisiesto.\n`);
// } else {
//     console.log(`\nEl año ${year} no es año bisiesto.\n`);
// }