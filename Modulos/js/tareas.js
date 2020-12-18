// Exportar Variables

// export const nombreTarea = 'Pasear al Perro';


// Exportar Funciones

// export const crearTarea = (tarea, urgencia) => {
//     return `La tarea ${tarea} tiene una urgencia de ${urgencia}`;
// }

// export const tareaCompletada = () => {
//     console.log(`La tarea se completo`);
// }


// Exportar Clases


// Escribir Clases

export default class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad;
    }

    mostrar() {
        console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
    }
}




