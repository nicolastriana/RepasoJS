// Template String

const nombre = 'Nicolas';
const trabajo = 'Desarrollador';

// Concatenar Javascript

console.log('Nombre: ' + nombre + ', Trabajo: ' + trabajo);
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

// Concatenar con multiples lineas

const contenedorApp = document.querySelector('#app');
let html = '<ul>' + 
                '<li> Nombre: ' + nombre + '</li>' +
                '<li> Trabajo: ' + trabajo + '</li>' +
            '<ul>'


let html2 = `<ul>
                <li> Nombre: ${nombre} </li>
                <li> Trabajo: ${trabajo} </li>
            </ul>`;

contenedorApp.innerHTML = html;
contenedorApp.innerHTML = html2;