//Estructuras de control
// const puntaje = 1000;
// if(puntaje === 1000){
//     console.log(`Si el puntaje es: ${puntaje}`)
// }
// else{
//     console.log(`El punta es distinto a: ${puntaje}`)
// };


// const efectivo = 1000;
// const carrito = 1000;
// if(efectivo >= carrito){
//     console.log(`El usuario puede pagar`);
// }
// else{
//     console.log(`Fondos insuficientes`);
// };

const rol = 'Administrador';
if(rol === 'Administrador'){
    console.log(`Acceso a todo el Sistema`)
}
else if(rol === 'Editor'){
    console.log('Puedes ingresar a algunas opciones');
}
else{
    console.log('No tienes acceso');
};