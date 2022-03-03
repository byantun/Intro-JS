//Array methods
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    {nombre: 'Monitor 15 pulgadas', precio: 500},
    {nombre: 'Television 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 600},
    {nombre: 'Audifonos', precio: 350},
    {nombre: 'Teclado', precio: 200},
    {nombre: 'Bocinas', precio: 150},
    {nombre: 'Laptot', precio: 550},
]
//for each
meses.forEach(function(mes){
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

//includes
let resultado =  meses.includes('Marzo');
// console.log(resultado);

//Some: ideal para arreglo de objetos
resultado = carrito.some(function(producto){
    return producto.nombre === 'Teclado'
});


//reduce
resultado =  carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0);

//filter
resultado = carrito.filter(function(producto){
    return producto.precio > 400
})

console.log(resultado);
