// Spread Operator ...

let lenguajes = ['JavaScript', 'PHP', 'Python'];
let framework = ['ReactJS', 'Laravel', 'Django'];

// Unir los arreglos en 1 solo

// Forma antigua
//let combinacion = lenguajes.concat(framework);

// Forma nueva
let combinacion = [...lenguajes, ...framework];

console.log(combinacion);


// Tambien permite crear arreglos nuevos
// Si no se crea un nuevo arreglo, el arreglo original se vera afectado por el .reverse


//let [ultimito] = lenguajes.reverse();

//console.log(ultimito);
//console.log(lenguajes);


let [ultimo] = [...lenguajes].reverse();

console.log(ultimo);
console.log(lenguajes);



// Otro ejemplo

function suma(a, b, c) {
    console.log(a + b + c);
}

const numeros = [1, 2, 3];

suma(...numeros);


