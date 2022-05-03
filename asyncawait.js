function saludo() {
    return new PromiseRejectionEvent(resolve =>{
        setTimeout(() =>{
            resolve('Se ha resuelto la promesa')
        }, 2000)
    })
}

async function mensaje(){
    const mensaje = await saludo();
    console.log('mensaje: ', mensaje);
}

mensaje();