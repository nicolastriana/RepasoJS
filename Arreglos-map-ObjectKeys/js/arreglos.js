// Arreglos, .map y ObjectKeys

const carrito = ['Producto1', 'Producto2', 'Producto3'];

console.log(carrito);

const appContenedor = document.querySelector('#app');
//appContenedor.innerHTML = carrito;

let html = '';
carrito.forEach(producto => {
    html += `<li>${producto}</li>`
})

appContenedor.innerHTML = html;


// .map - Este conserva el arreglo original y devuelve un nuevo arreglo

carrito.map(producto => {
    return 'El producto es ' + producto;
});


// Object Keys
// Esto nos permite comprobar las llaves

const persona = {
    nombre: 'Nicolas',
    profesion: 'Desarrollador',
    edad: 500
}

console.log(Object.keys(persona));