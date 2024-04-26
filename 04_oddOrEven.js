/*
Te diga si un número es par o impar
*/
import prompSync from "prompt-sync";
const prompt = prompSync();

const isEven = (number) => {
    return number % 2 === 0
}

let num = prompt(`\nIngresa un múmero: `)
console.log(isEven(num) ? `\nNumber ${num} is even\n` : `\nNumber ${num} is odd\n`);