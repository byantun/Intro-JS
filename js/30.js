const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = false;
    if(auth){
        resolve('Usuario autenticado');//El promise se cumple
    }else{
        reject('No se pudo iniciar sesión'); //El promise no se cumple
    }
});
usuarioAutenticado
    .then((resultado)=>{
        console.log(resultado);
    })
    .catch((error)=>{
        console.log(error);
    })


//En los promises existen 3 valores posibles
//pending: no se ha cumplido, pero tampoco se ha rechazado
//fulfilled: ya se cumplio
//rejected: se ha rechazado o no se ha podido cumplir