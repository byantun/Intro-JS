//objetos
// "use strict" //correr javascript en modo estricto - valida las buenas practicas
const producto = {
    nombreProducto : 'Monitor 20 pulgadas',
    precio         : 300,
    disponible     : true,
}

Object.freeze(producto); //congela el objeto, no permite  agregar nuevas propiedades, tampoco eliminar y modificarlos.
Object.seal(producto); //congela el objeto, no permite  agregar nuevas propiedades, tampoco eliminar pero si permite modificarlos.
producto.imagen = 'imagen.jpg';

console.log(producto);