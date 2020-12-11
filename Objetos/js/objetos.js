// Objetos

// Object Literal

const persona = {
    nombre: 'Nicolas',
    profesion: 'Desarrollador',
    edad: 500
}

const persona2 = {
    nombre: 'Nicoteso',
    profesion: 'Desarrollador',
    edad: 500
}

console.log(persona);
//console.log(persona.nombre);
//console.log(persona.profesion);
//console.log(persona.edad);
//console.log(persona['edad']);
console.log(persona2);
//console.log(persona2.nombre);
//console.log(persona2.profesion);
//console.log(persona2.edad);



// --------------------------------------------------------------------------------------------
// Object Constructor

function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

// Crear nueva tarea

// const tarea1 = new Tarea('Aprender JavaScript', 'Urgente');
// const tarea2 = new Tarea('Preparar Cafe', 'Media');
const tarea3 = new Tarea('Pasear al Perro', 'Urgente');
const tarea4 = new Tarea('Hacer tarea', 'Baja');

//console.log(tarea1);
//console.log(tarea2);
console.log(tarea3);
console.log(tarea4);



// --------------------------------------------------------------------------------------------
// Prototypes

function mostrarInformacionTarea(tarea, prioridad) {
    return `La tarea ${tarea} tiene una prioridad de ${prioridad}`;
}

//const mostrarInfo = mostrarInformacionTarea(tarea1.nombre, tarea1.urgencia);


// En algunos casos, las personas tomar nuestros metodos para utilizarlos y modificar el codigo
// generando con esto, problemas

const mostrarCliente = mostrarInformacionTarea(persona.nombre, persona.profesion);

console.log(mostrarCliente);

// Prototype nos permite enlazar funciones con objetos

Tarea.prototype.mostrarInformacionTarea = function() {
    return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
}

const tarea1 = new Tarea('Aprender JavaScript', 'Urgente');
const tarea2 = new Tarea('Preparar Cafe', 'Media');

console.log(tarea1);
console.log(tarea1.mostrarInformacionTarea());
console.log(tarea2);
console.log(tarea2.mostrarInformacionTarea());



// --------------------------------------------------------------------------------------------
// Destructuring de Objetos
// Estraer valores de un objeto

const aprendiendoJS = {
    version: {
        anterior: 'ES5',
        nueva: 'ES6'
    },
    frameworks: ['React', 'VueJS', 'AngularJS']
}

console.log(aprendiendoJS);

// Version anterior

let version1 = aprendiendoJS.version.nueva;
let framework1 = aprendiendoJS.frameworks[1];

console.log(version1);
console.log(framework1);

// Version nueva - Destructuring

let {version, frameworks} = aprendiendoJS;

console.log(version);
console.log(frameworks);

// Es necesario indicarle al destructuring a donde tiene que ir

let {nueva} = aprendiendoJS.version;

console.log(nueva);



// --------------------------------------------------------------------------------------------
// Object Literal Enhacement

const banda = 'Metallica';
const genero = 'Heavy Metal';
const canciones = ['Master of Puppets', 'Seek & Destroy', 'Enter Sandman'];

// Forma anterior

const metallica = {
    banda: banda,
    genero: genero,
    canciones: canciones
}

console.log(metallica);

// Forma nueva

const metallica1 = {banda, genero, canciones};

console.log(metallica1);