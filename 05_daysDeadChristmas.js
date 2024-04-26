// Calcule los días que faltan para día de muertos y navidad

import promptSync from "prompt-sync";
let prompt = promptSync();
const initialDate = new Date();
const currentYear = initialDate.getFullYear();

const daysCalculator = (day, month) => {
    let elapsedDaysInitial = calculateElapsedDays(day, month-1);
    let elapsedDaysDead = calculateElapsedDays(2, 10);
    let elapsedDaysXmas = calculateElapsedDays(25, 11);
    // let daysForDead = `Faltan ${elapsedDaysDead - elapsedDaysInitial} día(s) para el dpia de muertos`;
    // let daysForXmas = `Faltan ${elapsedDaysDead - elapsedDaysInitial} día(s) para Navidad`;
    if(elapsedDaysDead - elapsedDaysInitial < 0) {
        console.log(`\nHan pasado ${elapsedDaysInitial - elapsedDaysDead} día(s) desde el día de los muertos`);
    } else {
        console.log(`\nFaltan ${elapsedDaysDead - elapsedDaysInitial} día(s) para el día de muertos`);
    }
    if(elapsedDaysXmas - elapsedDaysInitial < 0) {
        console.log(`\nHan pasado ${elapsedDaysInitial - elapsedDaysXmas} día(s) desde el día de los muertos`);
    } else {
        console.log(`\nFaltan ${elapsedDaysXmas - elapsedDaysInitial} día(s) para Navidad`);
    }
};

const calculateElapsedDays = (day, month ) => {
    const calendarMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
    let elapsedDays = 0;
    month = month - 1;
    for (let i = 0; i < month; i++) {
        elapsedDays += calendarMonths[i]
    }
    if((month > 1 || (month == 1 && day > 28)) && (currentYear % 4 === 0 && currentYear % 100 != 0 || currentYear % 400 == 0 )) {
        elapsedDays += 1;
    }
    return elapsedDays = elapsedDays + day;
};

const menuSelection = () => {
    let optionMenu;
    let month;
    let day;
    do {
        console.clear();
        console.log("1 - Obtener el cálculo de los día con fecha actual (1)");
        console.log("2 - Obtener el cálculo de los día ingresando fecha (2)");
        console.log("3 - Terminar (3)");
        optionMenu = Number(prompt("Opcion: "));
    
        switch (optionMenu) {
            case 1:
                month = initialDate.getMonth() + 1;
                day = initialDate.getDate();
                daysCalculator(day, month);
                break;
            case 2:
                month = Number(prompt('Ingresa mes MM: '));
                day = Number(prompt('Ingresa día DD: '));
                daysCalculator(day, month);
                break;
            case 3:
                break;
            default:
                console.log('Elige la opción correcta');
                break;
        }
        if (optionMenu != 3) {
            let esperar = prompt('\nPresiona cualquir tecla para continuar');
        }
    } while (optionMenu != 3);
}

menuSelection();




