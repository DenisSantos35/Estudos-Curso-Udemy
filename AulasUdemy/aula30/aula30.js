/*const verdadeira = true;
 //let tem escopo de bloco global e local
 //var so tem escopo de função
let nome = 'Luiz'; //criando
var nome2 = 'Luiz'; //criando

if (verdadeira){
    let nome = 'otavio' //criando
    var nome2 = 'otavio' // redeclarando
    
    if(verdadeira){
        let nome = 'Miranda' //criando
        var nome2 = 'miranda'  //redeclarando      
    }    
}
console.log(nome,nome2)*/
// var respeita somente as funçoes ja o let respeita os blocos {...} 
/*var sobrenome = 'Miranda';
function falaOi(){
    var nome = 'Luiz';
    console.log(nome);
    console.log(sobrenome);
}

falaOi();*/
const pontuacaoUsuario = 1000;
const pontuacao = pontuacaoUsuario <= 999 ? 'Normal' : 'Vip'
const corUsuario = 'rosa'
const usuario = corUsuario || 'black'
console.log(pontuacao, usuario)

