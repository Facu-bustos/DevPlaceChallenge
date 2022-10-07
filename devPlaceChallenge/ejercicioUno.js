//Devuelve "true" si "numero" es primo
//Devuelve "false" si "numero" no es primo
//Un numero es primo solo si es divisible por 1 y por si mismo
//Los numeros 0 y 1 no son numeros primos

var r1 = require("readline");
var prompts = r1.createInterface(process.stdin, process.stdout);
var i =2;
var primo = true;
prompts.question("Ingrese un numero ", function (number) {

    while(i < number){
        if(number %i == 0){
            primo = false;
        }
        i++;
    }

    if(primo == true){
        console.log("El número "+number+" es primo")
    }else{
        console.log("El número "+number+" no es primo, intenta otra vez")
    }
    process.exit();
});

