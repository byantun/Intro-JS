//POO
//object Literal
const producto ={
    nombre:'tablet',
    precio: 502,
}

//object constructor
function Producto(nombre,precio,disponible){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}
function Cliente(nombre,apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}
Producto.prototype.formatearCliente = function(){
    return `El Cliente ${this.nombre} ${this.apellido}`;
}

//crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto = function(){
    return `El ${this.nombre} tiene un precio de $${this.precio}`;
}

const producto2 = new Producto('Monitor Curvo',800,true);
const producto3 = new Producto('Laptop',500,false);

const cliente = new Producto('Diego','Antunez');

function formatearProducto(producto){
    return `El ${producto.nombre} tiene un precio de $${producto.precio}`;
}
console.log(cliente);
console.log(formatearProducto(producto2));
console.log(formatearProducto(producto3));



