//Arrays o Arreglos
const numeros = [1 , 2 , 3];

// console.log(numeros);
// console.table(numeros);


//Acceder a los valores de un arreglo
// console.log(numeros[0]);


//conocer la extension de un arreglo
// console.log(numeros.length);


//Acceder a todos los valores de un arreglo
numeros.forEach(function(numero){
    // console.log(numero)
})

const num = [10,50,70,80];

num.push(60);//Agrega al final sin necesidad de conocer la extension del arreglo
num.unshift(-60);//Agrega al inicio
console.table(num);


const meses = ['Enero','Febrero','Marzo','Abril','Mayo'];
meses.pop(); //Elimina el ultimo elemento del arreglo
meses.shift();//Elimina el primer elemento del arreglo
meses.splice(2,1);//El primer valor indica desde que posicion eliminar, el segundo cuantos elementos eliminara a partir de la posicion
console.log(meses);

//Rest Operator o spead operator
const nuevoArreglo = [...meses, 'Junio'];
console.log(nuevoArreglo);