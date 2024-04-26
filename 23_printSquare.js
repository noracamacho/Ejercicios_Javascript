import PromptSync from "prompt-sync";
const prompt = PromptSync();

const topBottom = (num, bottom = false) => {
    return  '\n' + '* '.repeat(num) + `${bottom === true ? '\n' : ''}`;
};
const laterals = (side) => {
    return ('\n*' + '  '.repeat(side - 2) + ' *').repeat(side - 2)
}

const createSquare = (num) => {
    if(num < 2) return 'El cuadro debe contener al menos 2 caracteres por lado.';
    return topBottom(num) + laterals(num) + topBottom(num, true)
}
console.clear();
const number = +prompt('Ingresa el numero de caracteres que deseas que tenga de lado el cuadrado: ');
console.log(createSquare(number));