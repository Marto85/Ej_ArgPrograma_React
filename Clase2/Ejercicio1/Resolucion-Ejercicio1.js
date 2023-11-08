/*Ejercicio 1
Tengo desarrollada la siguiente función en javascript
function suma (a,b,callback){
let c = a +b;
callback( );
}
¿Que es el tercer parámetro recibido?
¿En que casos es obligatorio desarrollar este tipo de funciones?
Realizar un llamado a la función de ejemplo.*/

/* El tercer parametro recibido es una funcion que se ejecuta dentro de la funcion suma.
Es obligatorio desarrollar este tipo de funciones en los casos en que se necesite ejecutar una funcion dentro de otra funcion. Por ejemplo cuando trabajamos de manera asincrona, y en lugar de bloquear la ejecucion esperando a que se complete la funcion, se utiliza un callback para indicar que debe suceder una vez finalizada la funcion.*/

//Ejemplo:
const sumarNumeros = (a, b, accionDespuesDeSumar) => {
    let resultado = a + b;
    accionDespuesDeSumar(resultado); // Llamamos a la función callback que pasamos como parametro
};

const mostrarResultado = (resultado) => {
    console.log("El resultado de la suma es: " + resultado);
};

// Ahora llamamos a la funcion sumarNumeros que definimos al inicio, pasandole como parametro la funcion mostrarResultado para que se ejecute una vez finalizada la suma.
sumarNumeros(5, 3, mostrarResultado);



