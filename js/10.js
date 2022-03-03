//objetos
const nombreProducto = 'Monitor 20 pulgadas';
const precio = 300;
const disponible = true;

const producto = {
    nombreProducto : 'Monitor 20 pulgadas',
    precio         : 300,
    disponible     : true,
}
// Agregar nuevas propiedades
producto.imagen = 'imagen.jpg'

//Eliminar nuevas propiedades
delete producto.imagen; 

console.log(producto);
// console.log(producto.precio);