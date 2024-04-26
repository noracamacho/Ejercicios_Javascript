// Calcule los días que faltan para día de muertos y navidad
import promptSync from "prompt-sync";
let prompt = promptSync();
const initialDate = new Date();
const currentYear = initialDate.getFullYear();

const daysCalculator = (month, day, endMonth, endDay, holiday) => {
    let elapsedDays = calculateElapsedDays(month, day, endMonth, endDay);
    console.log(elapsedDays < 0 ? `\nHan pasado ${-elapsedDays} día(s) desde ${holiday}` : `\nFaltan ${elapsedDays} día(s) para ${holiday}`);
};

const calculateElapsedDays = (monthInitial, dayInitial, monthFinal, dayFinal) => {
    const calendarMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
    let elapsedDays = 0;
    let isPastDate = false;
    
    if(monthInitial > monthFinal) {
        [monthInitial, monthFinal] = [monthFinal, monthInitial]; // Since V8 swapping values using array destructuring is as fast as with a temporary variable
        [dayInitial, dayFinal] = [dayFinal, dayInitial];
        isPastDate = true;
    }

    for (let i = monthInitial; i < monthFinal; i++) {
        elapsedDays += calendarMonths[i];
    }
    if((monthInitial < 1 || (monthInitial == 1 && dayInitial <= 28)) && (currentYear % 4 === 0 && currentYear % 100 != 0 || currentYear % 400 == 0 )) {
        elapsedDays += 1;
    }
    if(isPastDate) return -(elapsedDays + dayFinal - dayInitial);
    return elapsedDays + dayFinal - dayInitial;
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
                month = initialDate.getMonth();
                day = initialDate.getDate();
                daysCalculator(month, day, 10, 2, 'Día de Muertos');
                daysCalculator(month, day, 11, 25, 'Navidad');
                break;
            case 2:
                month = Number(prompt('Ingresa mes MM: '));
                day = Number(prompt('Ingresa día DD: '));
                daysCalculator(month - 1, day, 10, 2, 'Día de Muertos');
                daysCalculator(month - 1, day, 11, 25, 'Navidad');
                break;
            case 3:
                break;
            default:
                console.log('Elige la opción correcta');
                break;
        }
        if(optionMenu != 3){
            let esperar = prompt('\nPresiona cualquir tecla para continuar');
        }
    } while (optionMenu != 3);
}

menuSelection();


