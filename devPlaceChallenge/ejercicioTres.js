//Se hizo el calculo de el sueldo, cantidad de horas, antiguedad, y valor hora de un empleado

const prompt = require("prompt-sync")();

var valorHora, nombre, antiguedad, cantHorasTrabajadas, sueldo;

valorHora = prompt('Ingrese el valor hora del empleado a cargar: ');
nombre = prompt('Ingrese el nombre del empleado: ');
antiguedad = prompt('Ingrese la antiguedad de ' +nombre+': ');
cantHorasTrabajadas = prompt('Ingrese la cantidad de horas trabajadas de '+nombre+': ');

sueldo = calcularSueldo(valorHora, antiguedad, cantHorasTrabajadas);

console.log('El sueldo a cobrar de ' +nombre+ ' equivale a: '+ sueldo +'. Tiene una antiguedad de '+ antiguedad + ' años');

function calcularSueldo(valorHora, antiguedad, cantHoras) {
    var totalSueldo;
    totalSueldo = valorHora * cantHoras;

    if(antiguedad >= 10){
        totalSueldo = antiguedad * 30;
    }
    return totalSueldo;
}
