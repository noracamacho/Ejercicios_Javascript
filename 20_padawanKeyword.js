import PromptSync from "prompt-sync";
const prompt = PromptSync();

console.clear();
const keyword = 'padawan';
let count = 1;
const promptKeyword = () => {
    do {
        const userInput = prompt("Por favor ingresa la palabra clave para terminar: ");
        if (userInput.toLowerCase() === keyword) return 'Has ingresado la clave correcta'
        count++;
    } while (count <= 3);
    return 'Has superado el número máximo de intentos'
}
console.log(promptKeyword());