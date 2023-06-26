const promise = new Promise(function (resolve, reject) {
    resolve('Hey')
});

//-------------------------------------------------------

const cows = 8;

const countCows = new Promise(function (resolve, reject) {
    if (cows > 10) {
        resolve(`We have ${cows} cows on the farm`);
    } else {
        reject('There is no cows in the farm');
    }
});

countCows.then((result) => { // en caso de resolve .then
    console.log(result);
}).catch((error) => { // en caso de reject .catch
    console.log(error);
}). finally(() => console.log('Finally')) // cuando ya terminó (no importa si fue resolve o reject)



//-------------EJEMPLO USANDO setTimeout-------------------

function delay(time, message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message)
        }, time)
    })
}

delay(2000, 'corrió despues de 2 segundos')
    .then((respuesta) => console.log(respuesta));