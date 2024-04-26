import PromptSync from "prompt-sync";
const prompt = PromptSync();

const validateInput = (text) => {
    let input;
    do { input = prompt(text).toLowerCase() } while (!(input === 'si' || input === 'no'));
    return input;
}

const admissionToHigherEducation = () => {
    console.clear();
    let userInput = validateInput(`1. ¿Tienes un titulo de bachiller (si o no)? `)
    if(!(userInput === 'si')){
        userInput = validateInput(`2. ¿Has superado la prueba de acceso (si o no)? `);
        if(!(userInput === 'si')) return 'No puedes acceder a un grado superior, intenta nuevamente superando la prueba de acceso.\n'
    }  
    return '¡Felicidades, puedes acceder a un grado superior!\n';
}

console.log(admissionToHigherEducation());
