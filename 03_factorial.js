/*
Encuentre el factorial de cualquier número dado
 */
import promptSync from "prompt-sync";
const prompt = promptSync();

const factorial = (number) => {
    if(number < 1) {
        return 1;
    }
    return number * factorial(number - 1);
}
const num = prompt(`Ingresa el número al que deseas obtener el factorial:  `)
console.log(`\nEl factorial de ${num} es ${factorial(num)}\n`);