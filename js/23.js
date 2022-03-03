//Switch
const metodoPago = 'efectivo';

switch(metodoPago){
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
    case 'bitcoin':
        console.log('Pagaste con bitcoin');
    case 'cheque':
        console.log('Revisaremos los fondos primero');
    case 'efectivo':
        console.log('Pagaste con Efectivo');
    break;
    default:
        console.log('Aun no has pagado')
        break;
}