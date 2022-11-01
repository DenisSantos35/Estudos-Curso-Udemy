//capturar elementos de HTML
const nomeTarefa = document.querySelector('.tarefa');
const  criarTarefa = document.querySelector('.criarTarefa');
const tabelaTarefas = document.querySelector('.listaTarefas');

criarTarefa.addEventListener('click',   function(){
    if(!nomeTarefa.value) return; 
    criaTexto(nomeTarefa.value);
         

} );


nomeTarefa.addEventListener('keypress', function (e){
    if(e.key === "Enter"){
        if(!nomeTarefa) return;
        criaTexto(nomeTarefa.value);
        
    }
});

document.addEventListener('click', function(e){
    const elemento = e.target;
    if(elemento.classList.contains('apagar')){
        elemento.parentElement.remove()  
        salvarTarefa();    
    }
    

});
function limpaInput(){
    nomeTarefa.value = '';
    nomeTarefa.focus();
}

function criarLi(){
    let li = document.createElement('li');
    return li;
}
function criaTexto(texto){
    let li = criarLi();
    li.innerText = texto;
    tabelaTarefas.appendChild(li);
    criaApagar(li);
    limpaInput();
    salvarTarefa();
}



function criaApagar(li){
    li.innerText += " ";
    let apagar = document.createElement('button');
    apagar.innerText =`Apagar`;
    apagar.setAttribute('class', 'apagar');
    //ou apagar.classList.add('apagar');
    apagar.setAttribute('title', 'Botao Apagar');
    li.appendChild(apagar);    
}

function salvarTarefa(){
    let li = tabelaTarefas.querySelectorAll('li');    
    const listaDeTarefa = [];
    for(let valor of li){
        let dado = valor.innerText; 
        dado = dado.replace('Apagar', ' ').trim()       
        listaDeTarefa.push(dado);
        console.log(listaDeTarefa);     
    }
    let listaJSON = JSON.stringify(listaDeTarefa);
    localStorage.setItem('listTarefa', listaJSON);
}

function carregarTarefas(){
    const tarefas = localStorage.getItem('listTarefa')
    const carregamentoTarefa = JSON.parse(tarefas);
    for(let valor of carregamentoTarefa){
        criaTexto(valor);
    }

}
carregarTarefas();

