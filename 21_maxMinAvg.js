// "Ingresar números enteros para determinar el maximo, el minimo y el promedio, cuando ya no desees ingrear más números, ingresa el número 0";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

let arrNumbers = [];
let userInput;
console.log('Ingresar números enteros para determinar el maximo, el minimo y el promedio,\ncuando ya no desees ingrear más números, ingresa el número 0');
do {
    userInput = +prompt('Ingresa número: ')
    if(userInput !== 0) arrNumbers[arrNumbers.length] = userInput
} while (userInput !== 0);

let maxNumber = Math.max(...arrNumbers);
let minNumber = Math.min(...arrNumbers);
let sum = arrNumbers.reduce((acc, number) => acc + number, 0)
let avg = sum / arrNumbers.length
console.log(`\nlos números ingresados son: ${arrNumbers}`);
console.log(`Max: ${maxNumber} Min: ${minNumber} Suma: ${sum} Promedio: ${avg}\n`);