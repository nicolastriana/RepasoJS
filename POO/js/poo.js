// Escribir Clases

class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad;
    }

    mostrar() {
        console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
    }
}

class comprasPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad) {
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }

    mostrar() {
        super.mostrar();
        console.log(`y la cantidad de ${this.cantidad}`);
    }

    hola() {
        return 'Hola';
    }
}


// Crear Objetos

let tarea1 = new Tarea('Aprender JavaScript', 'Alta');
let tarea2 = new Tarea('Preparar cafe', 'Media');
let tarea3 = new Tarea('Pasear al perro', 'Alta');
let tarea4 = new Tarea('Hacer tareas', 'Baja');

// console.log(tarea1.mostrar());
// console.log(tarea2.mostrar());
// console.log(tarea3.mostrar());
// console.log(tarea4.mostrar());


// Compras

let compra1 = new comprasPendientes('Jabon', 'Urgente', 3);
compra1.mostrar();
console.log(compra1.hola());