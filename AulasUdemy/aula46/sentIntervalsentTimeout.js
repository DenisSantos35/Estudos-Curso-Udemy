function mostraHora(){
    let data = new Date();
    
    return data.toLocaleTimeString('pt-br', {
        hour12: false
    });
}
//para utilizar o setInterval tem que se passar referencia de uma funçao
//há duas maneiras criando uma funcao que chama outra funçao como abaixo.
 /*function funcaoDoInterval(){
    console.log(mostraHora())
 }
 
// setInterval(referencia da funcao, intervalo de tempos em ms)
 setInterval(funcaoDoInterval, 1000); //passando refereencia chama a funçao sem executar a mesma nao coloca os parenteses
 */

 //ou criando uma função anonima dentro do setInterval como veremos abaixo
 //setInterval(function (){console.log(mostraHora())}, 1000 );

 /*
 //ou por erofunction
let hora;
 setInterval(hora = () => console.log(mostraHora()), 1000);
 */
//podemos tambem jogar dentro e uma variavel
const time = setInterval(function (){console.log(mostraHora())}, 1000);

//setTimeout para a execuçao do set interval estipulando um tempo
// o tempo precisa ser maior no setTimeout do que no setInterval

setTimeout(function (){ 
    clearInterval(time); //clearInterval pare o intervalo e dentro do parenteses passa a variavel 
}, 5000);

setTimeout(function(){
    console.log('Aguarde...')
}, 9000);

setTimeout(function(){
    console.log('Finalizei a contagem')
}, 12000);