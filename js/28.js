//clases
class Producto{
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El Producto ${this.nombre} tiene un precio de $${this.precio}`;
    }
    
    formatearPrecio() {
        return `El precio es de ${this.precio}`;
    }
}

const producto2 = new Producto('Monitor Curvo',800);
const producto3 = new Producto('Laptop',400);

//Herencia
class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre,precio);
        this.isbn = isbn;
    }
    formatearProducto() {
        return `${super.formatearProducto()} y su isbn es ${this.isbn}`;
    }
}

const libro = new Libro('JavaScript',300, '5454656631313');
console.log(libro.formatearProducto());


console.log(producto2.formatearProducto());
console.log(producto3.formatearPrecio());


