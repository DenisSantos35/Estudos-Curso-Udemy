function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random()*(max - min) + min);

}


function esperaAi(msg, tempo){
    return new Promise((resolve, reject)=>{
        
        setTimeout(()=>{
            if(typeof msg !== 'string') {
                reject(false)
                return;            
            }
            resolve(msg.toUpperCase() + ' - Passei na promisse')
            return
        },tempo);
    });
}
function baixaPagina(){
    const emCache = false;
    if(emCache){
        return Promise.resolve('Pagina em cache')
    }else{
        return esperaAi('Pagina sendo baixada', rand(1,5))
    }
}


function baixaPagina2 (){
    const emCache = true;

    if(emCache){
        return Promise.reject('Pagina em cache')
    }else{
        return esperaAi('Pagina Carregada', rand(1,5))
    }
}
baixaPagina()
    .then(dadosPagina => {console.log(dadosPagina)})
    .catch(e => { console.log(e)})

baixaPagina2()
    .then(paginaCarregada => { console.log(paginaCarregada)})
    .catch(e => console.log('error' + e))
//Promise.all Promise.race Promise.resolve Promise.reject

const promises = [
    //'Primeiro Valor',
    esperaAi('Promise 1 ', rand(1,3)),
    esperaAi('Promise 2 ', rand(1,3) ),
    esperaAi('Promise 3 ', rand(1,3)),
    esperaAi('Promise 4', rand(1,3))
    //'Outro valor'
];
/*
Promise.all(promises)
    .then(valor => {
        console.log(valor);
    })
    .catch(e => {
        console.log(e);
    })
Valor de retorno da Promisse.all
[
  'Primeiro Valor',
  'PROMISE 1  - Passei na promisse',
  'PROMISE 2  - Passei na promisse',
  'PROMISE 3  - Passei na promisse',
  'Outro valor'
]

*/
/*
Promise.race(promises)
    .then(valor => {
        console.log(valor)
    })
    .catch(error => {
        console.log(error)
    });
//entrega o primeiro valor resovido Promise.race()
//PROMISE 2  - Passei na promisse
*/
