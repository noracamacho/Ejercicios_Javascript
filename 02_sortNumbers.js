// Ordene 5 números de menor a mayor
import promptSync from "prompt-sync";
let prompt = promptSync();

let numbers = [];
const sortNumbers = (num) => {
    let aux;
    for(let i = 0; i < num.length-1; i++) {
        for(let j = 0; j < num.length-1; j++) {
            if (num[j] > num[j+1]) {
                aux = num[j];
                num[j] = num[j + 1];
                num[j + 1] = aux;
            }
        }
    }
    // num.sort(function(a, b){
    //     return a - b
    // });
    return num;
};

for (let i = 0; i < 5; i++) {
    numbers[i] = Number(prompt(`Ingresa un número: `)); 
}
console.log(sortNumbers(numbers));