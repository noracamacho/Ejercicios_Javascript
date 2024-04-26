// Diseñar un algoritmo que pida por teclado tres números; si el primero es negativo, debe imprimir el producto de los tres y si no lo es, imprimirá la suma
import PromptSync from 'prompt-sync';
const prompt = PromptSync();    

const addOrMultiply = (arrayNumbers) => {
    if(arrayNumbers[0] < 0) {
        return arrayNumbers.reduce((acc, number) =>  acc * number , 1);
    } 
    return arrayNumbers.reduce((acc, number) => acc + number, 0);
}

let numbers = [];
console.log('Ingresar tres números para realizar la operación: ');
for (let index = 0; index <= 2; index++) {
    numbers[index] = +prompt(`Ingresa número: `);
}
console.log(`El resultado ${numbers[0] < 0 ? 'del producto' : 'de la suma'} es ${addOrMultiply(numbers)}`);