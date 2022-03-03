//objetos
const producto = {
    nombreProducto : 'Monitor 20 pulgadas',
    precio         : 300,
    disponible     : true,
}

//Forma anterior de hacerlo
const precioProducto = producto.precio;

//Destructuring 
const {precio, nombreProducto} = producto;
// const {nombreProducto} = producto;

console.log(precio);
console.log(nombreProducto);

// console.log(precioProducto);

