//User ingresa contraseña
//User tiene 3 intentos
//User ingresa bien la contraseña ´´1973´´ = true
//User ´´NO´´ ingresa bien la contraseña = false


const prompt = require("prompt-sync")();

var savePin = '1973';
var ingresar = false;

for (var i = 2; i >=0; i--) {

    var userPin =  prompt('Ingresa tu PIN. Tenes '+(i+1)+' intentos');

    if (userPin === savePin) {
        console.log('¡Felicitaciones, recordas tu contraseña!');
        ingresar = true;
    }else{
        console.log('Error. Te quedan ' + i + ' intentos.');
    }
    };

    if(ingresar == false){
        console.log("No acerto los intentos de ingreso, Tenes que ejercitar la memoria!");
    }
    
    process.exit();






    
