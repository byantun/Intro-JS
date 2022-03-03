//Funciones
//Declaracion de funcion
function sumar(){
    console.log(10+10)
};

sumar();

//Expresion de la funcion
const sumar2 = function(){
    console.log(10+5);
};
sumar2();

//IIFE
(function() {
    console.log('Esta es una funcion');
})();