import PromptSync from "prompt-sync";
const prompt = PromptSync();

const potenciaRaiz = () => {
    const number = Number(prompt('Ingresa un número para ralizar el cálculo: '));
    console.log(number <= 0 ? 'Error: El numero deber ser mayor a 0\n' : `Su cuadrado es ${number ** 2} y su raiz es ${Math.sqrt(number)}\n`);
}

potenciaRaiz();
