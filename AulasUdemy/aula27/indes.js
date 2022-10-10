//Operadores ternario 
// declacaraçao de variavel = (condicao) ? resposta para true : resposta para falso 

const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario Noramal'
console.log(nivelUsuario)
//if(pontuacaoUsuario >= 1000){
//    console.log('Usuario Vip');
//}else{
//    console.log('Usuario Normal');
//}

const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao)