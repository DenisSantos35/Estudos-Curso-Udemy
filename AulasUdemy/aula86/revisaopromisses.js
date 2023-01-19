function aleatorio(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random()*(max - min) + min)
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject)=> { 
        if(typeof msg !== 'string') reject('Error')       
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    })    
}

esperaAi('Conexão com Banco de dados', aleatorio(1,3))
.then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados do Banco de dados', aleatorio(1,3));
})
.then(resposta => {
    console.log(resposta)
    return esperaAi('Tratando dados da Base de dados', aleatorio(1,3));
}).then(resposta => {
    console.log(resposta);
    return esperaAi('Exibe dados na tela', aleatorio(1,2));
}).then(resposta =>{
    console.log(resposta)
    return esperaAi(2222, aleatorio(1,3))
}).then(resposta => {
    console.log(resposta)
})
.catch(e => {
    console.log(e)
})

