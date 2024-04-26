
import PromptSync from "prompt-sync";
const prompt = PromptSync();

const invertedSteps = (num) => {
    for (let count = 0; count <= num; count++) {
        let row = ' '.repeat(count) + '*'.repeat(num - count)
        console.log(row);
    }
}
const steps = prompt('Ingresa el número de escalones que deseas tenga la escalera invertida: ');
invertedSteps(steps);