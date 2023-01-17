
//funcao para gerar um numero aleatorio
function aleatorio(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}
/*
//funcao com calbeck
function esperaAi(msg, tempo, cb){
    setTimeout(() => {
        console.log(msg)
        if(cb) cb();
    }, tempo);
}
// metodo para o calbeck 
esperaAi('Frase 1', aleatorio(1,3), function(){
    esperaAi('Frase 2', aleatorio(1,3), function(){
        esperaAi('Frase 3', aleatorio(1,3), function(){

        });

    });
});
*/
//criando uma promisses
function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => { //retorna uma new promise(herowfunction(resolve,rject))
        if(typeof msg !== 'string') reject('BAD VALUE')
        setTimeout(() => {            //seta uma saida com tempo
            resolve(msg);   //resolve o parametro que foi passado na função
        }, tempo);
    });
    
}

esperaAi('Conexão com uma Base de dados', aleatorio(1,3))
    .then(resposta =>{
        console.log(resposta)
        return esperaAi('Buscando dados na Base', aleatorio(1,3))
    .then(resposta => {
        console.log(resposta)
        return esperaAi(2222, aleatorio(1,3))
    .then(resposta => {
        console.log(resposta)
    }).then(() => {
        console.log('Exibindo dados na tela')
    })
    })
    })
    .catch(e => {
        console.log('ERRO', e)
    })

console.log('Isso sera exibido antes de qualquer promise')