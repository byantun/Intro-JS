//Arrow Functions
const sumar2 = (n1,n2) => {
    console.log(n1+n2);
};
sumar2(5,10);


const aprendiendo = (tecnologia) => {
    console.log(`Aprendiendo: ${tecnologia}`)
}
aprendiendo('JavaScripts');


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
meses.forEach((mes) =>{
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

//Some: ideal para arreglo de objetos
resultado = carrito.some((producto) =>{
    return producto.nombre === 'Teclado'
});

//reduce
resultado =  carrito.reduce((total, producto) =>{
    return total + producto.precio
}, 0);
console.log(resultado);

//filter
resultado = carrito.filter(producto => producto.precio > 400);
console.log(resultado);
