// Calcule el número de días que alguien ha vivido tomando en cuenta su fecha de nacimiento
import promptSync from 'prompt-sync';
const prompt = promptSync();

// Funcion para calcular los días acumulados desde el día 1 de un año hasta un fecha dada de ese mismo año.
const calculateElapsedDays = (day, month, year) => {
    const calendarMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
    month = month - 1;
    let elapsedDays = 0;
    for (let i = 0; i < month; i++) {
        elapsedDays += calendarMonths[i];
    }
    // Comprobar si el año es bisiesto y si la fecha dada es despues del 28 de febrero
    if ((month > 1 || (month === 1 && day > 28)) && isLeapYear(year)) {
        elapsedDays += 1;
    }
    return elapsedDays + day;
}

// Funcion para verificar si un año es bisiesto
const isLeapYear = (year) => {
    return year % 4 === 0 && (year % 100 != 0 || year % 400 === 0);
}

const daysLived = () => {
    console.clear();
    let totalDays = 0;
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    const monthCalendar = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio' ,'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    let birthYear = Number(prompt('Ingresar año de nacimiento YYYY: '));
    let birthMonth = Number(prompt('Ingresar mes de nacimiento MM: '));
    let birthDay = Number(prompt('Ingresar día de nacimiento DD: '));

    // Dias acumulados en los años completos entre el año siguiente al año de nacimiento y el año actual
    for (let year = birthYear + 1; year < currentYear; year++) {
        if (isLeapYear(year)) {
            totalDays += 366;
        } else {
            totalDays += 365;
        }
    }
    // ********** Dias acumulados del año actual al día de hoy **********
    totalDays += calculateElapsedDays(currentDay, currentMonth, currentYear);

    // Si el año de nacimiento es el igual al año actual, se calcula la diferencia entre los días acumulados al día actual y los días acumulados a la fecha de nacimiento.
    if (birthYear === currentYear) {
        totalDays -= calculateElapsedDays(birthDay - 1, birthMonth, birthYear);
    }

    // ********** Dias acumulados en al año de nac ********** 
    if (birthYear < currentYear) {
        let elapsedBirthDays = 365 - calculateElapsedDays(birthDay, birthMonth, birthYear);
        if (((birthMonth < 1) || (birthMonth === 1 && birthDay <= 28)) && isLeapYear(birthYear)) {
            elapsedBirthDays += 1;
        }
        totalDays += elapsedBirthDays;
    }
    console.log(`\nFecha ingresada: ${birthDay} ${monthCalendar[birthMonth-1]} ${birthYear}`);
    console.log(`Ha vivido ${totalDays} día(s).\n`);
}
daysLived();
