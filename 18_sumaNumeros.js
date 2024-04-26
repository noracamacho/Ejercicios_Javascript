import PromptSync from "prompt-sync";
const prompt = PromptSync();

const addNumbers = (num) => {
    for (let i = num - 1; i > 0; i--) {
        num += i;
    }
    return num;
}
let number = prompt('Ingresa la cantidad de numeros que deseas sumar: ');
console.log(`El total de la suma es: ${addNumbers(+number)}`);
