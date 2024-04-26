// Calcule el volumen de una esfera
import PromptSync from "prompt-sync";
const prompt = PromptSync();

const calculateVolume = (sphereRadius) => {
    console.clear();
    if(sphereRadius <= 0) {
        return 'El radio debe ser mayor a 0'
    }
    return `El volumenn de la esfera es ${(4/3 * Math.PI * sphereRadius ** 3).toFixed(2)} cm\xB3`;
};
const radius = +prompt('Ingresa el radio de la esfera ');
console.log(calculateVolume(radius));

