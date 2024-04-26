// Reciba la velocidad y la distancia que tiene que recorrer un carro y entrega cuánto tiempo le tomaría recorrer esa distancia.

import promptSync from 'prompt-sync';
const prompt = promptSync();

const calculateTime = (speed, distance) => {
    speed = speed / 3600;
    let time = Math.floor(distance / speed);
    let hrs = Math.floor(time / 3600);
    let min = Math.floor((time % 3600)/60);
    let sec = (time % 360) % 60;
    console.log(`Te tomará ${hrs} hrs ${min} min ${sec} seg llegar a tu destino.`);
}

    
const distance = prompt("Ingrese la distancia a recorrer (km): ");
const speed = prompt("Ingrese la velocidad del vehiculo (km/hr): ");
calculateTime(speed, distance);