// Metodos para arreglos

const personas = [
    {nombre: 'Nicolas', edad: 22, aprendiendo: 'JavaScript'},
    {nombre: 'Pablo', edad: 18, aprendiendo: 'PHP'},
    {nombre: 'Alejandra', edad: 21, aprendiendo: 'AdobeXD'},
    {nombre: 'Laura', edad: 30, aprendiendo: 'Python'},
    {nombre: 'camilo', edad: 35, aprendiendo: 'ReactJS'}
]

console.log(personas);

// Mayores de 28 

const mayores = personas.filter(persona => {
    return persona.edad > 28;
});
console.log(mayores);

// Que aprende Alejandra?

const alejandra = personas.find(persona => {
    return persona.nombre === 'Alejandra';
});
console.log('Alejandra esta aprendiendo: ' + alejandra.nombre);

// Edad total de las personas

let total = personas.reduce((edadTotal, persona) => {
    return edadTotal + persona.edad;
}, 0);
console.log('La edad total es: ' + total);
console.log('El promedio de edad es: ' + total/personas.length);

