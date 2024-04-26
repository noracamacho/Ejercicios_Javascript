// Valide si una palabra o frase es palíndromo.

import promptSync from 'prompt-sync';
const prompt = promptSync();

const isPalindrome = (str) => {
    str = str.toLowerCase().split(' ').join('');
    let tail = str.length - 1;
    let count = 0;
    for (let head = 0; head < (str.length - 1) / 2; head++) {
        if(str[head] != str[tail]) count++;
        tail--;
    }
    return count === 0
}

const word = prompt("Ingresa la palabra o frase que deseas evaluar: ");
console.log(`La palabra o frase '${word}' ${isPalindrome(word) ? '' : 'no '}es palindromo`);