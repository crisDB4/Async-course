/* Primero se intalla xmlhttprequest ya que se ve a 
trabajar desde el editor de código
 $ npm i xmlhttprequest
*/

// llamado a XmlHttpRequest
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// hace referencia a la API
// API en mayúscula porque es un valor que no va a cambiar
const API = 'https://api.escuelajs.co/api/v1'; // Estamos haciendo referencia al root de nuestra API

// Nos va a permitir recibir la url de la API y el callback(una función anónima) para
// recibir la solictitud que no esté entregando el llamado a la API 
// urlApi: url a la que va a hacer el llamado
// callback: nos va a retornar los elementos o el error
function fetchData(urlApi, callback) {
    // con xmlhttprequest es una de las formas de hacer peticiones
    // podemos controlar todo el flujo del llamado
    // la variable se crea para hacer referencia a la variablle que se creó al principio del documento
    let xhttp = new XMLHttpRequest();

    //xhttp.open para abrir una conexión a la API
    // 'GET' -> queremos obtener
    // url
    // true -> para habilitarlo
    xhttp.open('GET',urlApi,true);

    // escuchar diferentes estados que tiene la solicitud
    // de esta forma se puede saber cuando está disponible la información
    xhttp.onreadystatechange = function (event) {
        // validar en que estado se encuentra
        if (xhttp.readyState === 4) {
            /* 
            Estados en los que se encuentra el readyState:
            0 = no se ha inicializado
            1 = loading, todavía no se ha llamado el valor de send
            2 = cuando ya se ejecutó el valor de send
            3 = interactuando, está descargando o trabajando con la solicitud
            4 = cuando se ha completado la llamada
            */

            // validar el status
            if(xhttp.status === 200){
                /* 
                100 - 199: Respuestas informativas
                200 - 299: Respuestas satisfactorias
                300 - 399: Redirecciones
                400 - 499: Errores de los clientes
                500 - 599: Errores de los servidores
                
                https://developer.mozilla.org/es/docs/Web/HTTP/Status
                */
                // se utiliza la función callback
                // el json es una transformación de la información -> pasaría a ser un objeto
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                // cuando se tenga un error:
                const error = new Error('Error ' + urlApi);
                // retorna pasando el valor del error y el valor de nulo porque no se está pasando ningún dato
                return callback(error, null);
            }
        }
    }
    // para que se ejecute toda la lógica
    xhttp.send();
}
// xmlhttprequest era una forma que se utilizaba a los inicios de js
// xmlhttprequest tiene soporte en todos los navegadores
// fetch es una implementación más moderna para hacer mas simple el llamado a una solicitud

fetchData(`${API}/products`, function(error1, data1) { // la función anónima es el callback
    if (error1) return console.error(error1);
    fetchData(`${API}/products/${data1[0].id}`, function(error2, data2) {
        if (error2) return console.error(error2);
        // uso de optional chaining
        fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
            if (error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});