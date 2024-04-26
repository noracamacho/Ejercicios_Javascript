// Calcule el área de un triangulo
import promptSync from 'prompt-sync';
const prompt = promptSync();

const areaTriangulo = (base, height) => {
    return base * height / 2
}

const height = prompt('Ingresa la altura (cm): ');
const base = prompt('Ingresa la base (cm): ');
console.log(`El área de triángulo es ${areaTriangulo(base, height)} cm\xB2`);