// //Funciones que retornan valores
// function sumar(n1, n2){
//     return n1 + n2;
// }
// const resultado = sumar(5,20);
// console.log(resultado);

let total = 0;
function AgregrarCarrito(precio){
    return total += precio;
}

function CalcularImpuesto(total){
    return 1.15 * total;
}

total = AgregrarCarrito(200);
total = AgregrarCarrito(150);

console.log(total);

const totalAPagar = CalcularImpuesto(total);
console.log(`El total a pagar con Impuestos es: $${totalAPagar}`);