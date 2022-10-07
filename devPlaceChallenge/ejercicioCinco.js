const prompt = require("prompt-sync")();



var number;
var mayor, menor, sumatoria;
var array = [];

do{
    number = prompt('Ingrese un numero, si desea salir ingrese -1: ')

    if(number != -1){
        array.push(number);
    }
}while(number != -1)

sumatoria = sumar_array(array);
mayor = Math.max.apply(Math, array);
menor = Math.min.apply(Math, array);


console.log('El mayor numero ingresado es: ' + mayor);
console.log('El menor numero ingresado es: ' + menor);
console.log('La sumatoria de todos los numeros es: ' + sumatoria);

function sumar_array(array_numeros){
        
    var suma = 0;
    
    array_numeros.forEach (function(numero){
        suma += numero;
    });
    
    return suma;
    
}