// Lea el nombre de la persona y lo imprima en la pantalla

import promptSync from "prompt-sync";
const prompt = promptSync();

const printName = () => {
    const name = prompt('Ingrese su nombre: ');
    const lastNameF = prompt('Ingrese su apellido paterno: ');
    const lastNameM = prompt('Ingrese su apellido materno ');
    console.log(`\nBienvenido al programa ${name} ${lastNameF} ${lastNameM}!\n`);
}

printName();