// Importar Variables

// import {nombreTarea, crearTarea, tareaCompletada} from './tareas.js';

// console.log(nombreTarea);


// Importar Funciones

// const tarea1 = crearTarea('Pasear al Perro', 'Alta');

// console.log(tarea1);
// tareaCompletada();


// Importar Clases

import Tarea from './tareas.js';

const tarea1 = new Tarea('Aprender JavaScript', 'Urgente');

console.log(tarea1);
tarea1.mostrar();