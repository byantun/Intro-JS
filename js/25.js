const carrito = [
    {nombre: 'Monitor 15 pulgadas', precio: 500},
    {nombre: 'Television 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 600},
    {nombre: 'Audifonos', precio: 350},
    {nombre: 'Teclado', precio: 200},
    {nombre: 'Bocinas', precio: 150},
    {nombre: 'Laptot', precio: 550},
];
//ForEach
carrito.forEach((producto) =>{
    console.log(producto.nombre);
});


//Map
carrito.map((producto) =>{
    console.log(producto.nombre);
});