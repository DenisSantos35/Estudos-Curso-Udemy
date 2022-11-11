const nome  = document.querySelector('#nome');
const botao = document.querySelector('#botao');
const deletar = document.querySelector('#delete');
const novaLista = document.querySelector('#delet');
let lista = [];

function enviaLocale(dado){
    dado = JSON.stringify(dado);
    return dado
}

function gravaLocale(dado){

    localStorage.setItem('nome', dado);

}

botao.addEventListener('click', function(){
    if(isNaN(nome.value)){  
        lista.push(nome.value);
        nome.value = " ";
        nome.focus();
        
    }else{
        nome.value = " ";
        nome.focus();
    } 
    console.log(lista);
    const dados = enviaLocale(lista); 
    gravaLocale(dados);
    
    
});

function dele(){    
    lista.pop();
    enviaLocale(lista);
    gravaLocale(lista);


};

deletar.addEventListener('click', dele);
