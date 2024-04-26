import PromptSync from "prompt-sync";
const prompt = PromptSync();

const addEvenNumbers = (number) => {
    if(number < 1) return 'El número debe ser mayor a 0';
    let evenNumber = number % 2 === 0 ? number : number + 1;
    let result = evenNumber;
    let numbersString = evenNumber.toString();
    for(let i = 2 ; i <= number; i++) {
        evenNumber += 2
        result += evenNumber;
        numbersString += ` + ${evenNumber}`
    }
    return `El total de la suma de los numeros pares es: ${numbersString} = ${result}`;
}

const num = +prompt('Ingresa la cantidad de numeros pares que deseas sumar: ');
console.log(addEvenNumbers(num));