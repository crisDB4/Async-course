function sum(num1, num2) {
    return num1 + num2;
}

// no es necesario que el parametro se llame callback,
// puede tener cualquier nombre
function calc(num1, num2, callback) {
    return callback(num1, num2)
}

// se pasa el nombre de la función sin parentesis
console.log(calc(2,2, sum));

//-----------------------------------------------------

/*
El método global setTimeout() establece un temporizador
que ejecuta una función o una pieza de código específica
una vez que expira el temporizador
*/
// función anónima no tiene nigun nombre
setTimeout(function () {
    console.log('Hola JavaScript');
}, 2000)

/*
Como se ve en el siguiente código, se utiliza el
concepto de callback, ya que una función recibe
como argmuento otra función. En el siguiente ejemplo
setTimeout recibe como argumento a la función greeting
*/
function greeting(name) {
    console.log(`Hola ${name}`)
}

setTimeout(greeting, 2000, 'Oscar');