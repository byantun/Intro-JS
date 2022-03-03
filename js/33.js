//Fetch API
async function obtenerEmpleados(){
    const archivo = 'empleados.json';
    // fetch(archivo)
    // .then(resultado =>{
    //     return resultado.json();
    //     // console.log(resultado);
    // })
    // .then(datos =>{
    //     console.log(datos);
    // })

    const resultado = await fetch(archivo);
    // console.log(resultado);
    const datos = await resultado.json();
    console.log(datos)
}
obtenerEmpleados();