// Valide si una palabra o frase es palíndromo.

import promptSync from 'prompt-sync';
const prompt = promptSync();

const isPalindrome = (str) => {
    str = str.toLowerCase().split(' ').join('');
    return str === str.split('').reverse().join('')
}

const word = prompt("Ingresa la palabra o frase que deseas evaluar: ");
console.log(`La palabra o frase '${word}' ${isPalindrome(word) ? '' : 'no '}es palindromo`);