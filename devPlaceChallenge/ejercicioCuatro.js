//Generar un número aleatorio comprendido entre 0 y 1000.
//Usuario adivinar el número escogido por el ordenador. 
//Usuario debe ingresar un número.

const prompt = require("prompt-sync")();

var randomNumber = getRandomInt(0, 1000);
do {
var number = prompt('Ingrese un numero entre 1 y 1000: ');

    if(number >=1 && number <= 1000){
        var esIgual = false;
        
            if(randomNumber > number){
                console.log('es mayor');
            }
            if(randomNumber < number){
                console.log('es menor');
            }
            if(randomNumber == number){
                esIgual = true;
                break;
            }
        }else{
            console.log('Tiene que ser entre 1 y 1000');
        }
}while(esIgual == false)


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
