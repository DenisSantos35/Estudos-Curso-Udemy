const nome = document.querySelector('#nome');
const btnEntrada = document.querySelector('#botao');
const armazenaNome = [];
const nomeDelete = document.querySelector('#del');
const btnSaida = document.querySelector('#delete');
const resposta = document.querySelector('#resposta')

btnEntrada.addEventListener('click', function(){    
    if(isNaN(nome.value)){
        armazenaNome.push(nome.value);
        console.log(armazenaNome);       
    }     
});
    const novo = JSON.stringify(armazenaNome);
    localStorage.setItem('nome', novo);
    const bancoDados = localStorage.getItem('nome');
    const novoDados = JSON.parse(bancoDados);
    console.log(novoDados);
    for(let i of novoDados){
    resposta.innerHTML = `${i}`
}

btnSaida.addEventListener('click', function(){
    armazenaNome.pop();
    console.log(armazenaNome);
});



