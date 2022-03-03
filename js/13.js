//objetos
// "use strict" //correr javascript en modo estricto - valida las buenas practicas
const producto = {
    nombreProducto : 'Monitor 20 pulgadas',
    precio         : 300,
    disponible     : true,
}


const medidas = {
    peso: '1kg',
    medida: '1m',
}
//Unir dos objetos con el spread operator
const nuevoProducto = { ...producto, ...medidas};

console.log(producto);
console.log(nuevoProducto);
