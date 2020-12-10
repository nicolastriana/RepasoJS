// Funciones

// Function Declaration
// JS lee todo el documento antes de ejecutarlo, por esta razon, se puede invocar la
// funcion antes de crearla
saludar('Nicolas');

function saludar(nombre) {
    console.log('Bienvenido ' + nombre);
}

saludar('Laura');
saludar('Alejandra');


// Function Expression
// Es necesario crear la funcion antes de poder invocarla
const cliente = function(nombreCliente) {
    console.log('Mostrando datos del cliente: ' + nombreCliente);
}

cliente('Nicolas');

// --------------------------------------------------------------------------------------------
// Parametros por default en las funciones

function actividad(nombre = 'Walter White', actividad = 'Enseñar Quimica') {
    console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
}

actividad('Nicolas', 'Aprender JS');
actividad('Laura', 'Crando una aplicacion');
actividad();
actividad('Antonio');


// --------------------------------------------------------------------------------------------
// Arrow Functions

let viajando = function(destino) {
    return `Viajando a la ciudad de: ${destino}`;
}

let viaje = viajando('Paris');
viaje = viajando('Londres');
viaje = viajando('Barcelona');

console.log(viaje);

// Se reemplaza la palabra function por una flecha =>

let viajando2 = (destino, duracion) => {
    return `Viajando a la ciudad de: ${destino} por ${duracion}`;
}

let viaje2 = viajando2('Paris');
viaje2 = viajando2('Barcelona');
viaje2 = viajando2('Londres', '9 dias');

console.log(viaje2);



let viajando3 = (destino, duracion) => `Viajando a la ciudad de: ${destino} por ${duracion}`;

let viaje3 = viajando3('Londres', '9 dias');
viaje3 = viajando3('Barcelona');
viaje3 = viajando3('Paris', '9 dias');

console.log(viaje3);