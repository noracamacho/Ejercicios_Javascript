// Calcule el incremento salarial de una persona: Si su salario es menor a 15mil el incremento será del 20% y si es mayor a 15mil el incremento será del 15%

import promptSync from 'prompt-sync';
const prompt = promptSync();

const incrementoSalarial = (salary) => {
    let increase = 15;
    if(salary <= 15000) {
        increase = 20;
    }
    salary += (salary * increase / 100);
    return `\nEl incremento salarial será del ${increase}%, quedando un salario actualizado de $${salary}\n`
}
let initialSalary = Number(prompt('Inngresa el salario actual de empleado: '));
console.log(incrementoSalarial(initialSalary));