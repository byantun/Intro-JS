//Async / Await
function descargarNuevosClientes(){
    return new Promise(resolve =>{
        console.log('Descargando clientes...');
        setTimeout(() => {
            resolve('Los clientes fueron descargados..')
        }, 5000);

    })
}

function descargarUltimospedidos(){
    return new Promise(resolve =>{
        console.log('Descargando Pedidos...');
        setTimeout(() => {
            resolve('Los pedidos fueron descargados..')
        }, 3000);

    })
}

async function app(){
    try{
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimospedidos();
        // console.log(clientes);
        // console.log(pedidos);
        const resultado = await Promise.all([descargarNuevosClientes(),descargarUltimospedidos()]);
        console.log(resultado);

    }
    catch (error){
        console.log(error);
    }
}
app();
console.log('Este codigo sigue ejecutandose');