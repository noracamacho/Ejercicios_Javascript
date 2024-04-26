import PromptSync from "prompt-sync";
const prompt = PromptSync();

const porcentage = (cuantity1, cuantity2) => {
    return cuantity1 * 100 / (cuantity1 + cuantity2);
}

const porcentageBoysGirls = () => {
    const boys = +prompt('Ingresa la cantidad de niños en el colegio: ');
    const girls = +prompt('Ingresa la cantidad de niñas en el colegio: ');
    console.log(`\n${porcentage(boys, girls)}% de los alumnos son niños`);
    console.log(`${porcentage(girls, boys)}% de los alumnos son niñas\n`);
}

porcentageBoysGirls();