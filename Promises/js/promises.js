// Promises

// Resolve - El codigo que se ejecuta cuando el llamado al promise es correcto
// Reject - El codigo que se ejecuta cuando hubo algun error

const aplicarDescuento = new Promise((resolve, reject) => {
    setTimeout(() => {
        let descuento = true;

        if(descuento) {
            resolve('Descuento aplicado!');
        } else {
            reject('No se pudo aplicar el descuento')
        }
    }, 3000);
});

aplicarDescuento.then(resultado => {
    console.log(resultado);
}).catch(error => {
    console.log(error);
});



// Promise con AJAX

const descargarUsuarios = cantidad => new Promise((resolve, reject) => {

    // Pasar la cantidad a la API
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    // Llamado a AJAX
    const xhr = new XMLHttpRequest();

    // Abrir la conexion
    xhr.open('GET', api, true);

    // On load
    xhr.onload = () => {
        if(xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText).results);
        } else {
            reject(Error(xhr.statusText));
        }
    }

    // Opcional (On error)
    xhr.onerror = (error) => reject(error);

    // Send
    xhr.send();
});

descargarUsuarios(10).then(
    miembros => imprimirHTML(miembros),
    error => console.error(
        new Error('Hubo un error ' + error)
    )
);

function imprimirHTML(usuarios) {
    let html = '';
    usuarios.forEach(usuario => {
        html += `
            <li>
                Nombre: ${usuario.name.first} ${usuario.name.last}
                Pais: ${usuario.nat}
                Imagen: 
                    <img src="${usuario.picture.medium}">
            </li>
        `;
    });
    const contenedorApp = document.querySelector('#app');
    contenedorApp.innerHTML = html;
}