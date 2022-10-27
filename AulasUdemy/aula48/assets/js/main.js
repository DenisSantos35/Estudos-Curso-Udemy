//Selecionar tags do html
const inputTarefa = document.querySelector('.input-tarefa');
const adicionarTarefa = document.querySelector('.btn-tarefa');
const tabela = document.querySelector('.tarefas');

function getLi(){ //funcao para criar elemento li dentro da ul no html
    const li = document.createElement('li');  //criação de elemento
    return li;    //retorna o elemento criado.
}
inputTarefa.addEventListener('keypress', function(e){ //função para pegar tecla precionada com keypress
    if(e.keyCode === 13){ //o codigo do enter e 13, pega o evento e compara se e a tecla enter
        if(!inputTarefa.value) return; // se nao tiver valor nao retorna nada 
        criaTarefa(inputTarefa.value);  // chama funcao para criar a frase e passa o valor que esta no imput
    }
} );
function criaTarefa(msg){  //funcao para criar mensagem da tarefa 
      const li = getLi(); //chama funcao que cria a linha da ul
      li.innerText = msg; // armazena na ul a linha com a mensagem
      tabela.appendChild(li); 
      getLimpa();   //apos criado chama funcao para apagar o imput
}

function getLimpa(){  //funcao para limpar o imput e deixar o cursor piscando para nova tarefa
    inputTarefa.value = ''; //esvazia o input
    inputTarefa.focus();  //coloca o cursor no foco input

}

adicionarTarefa.addEventListener('click', function(){ //adicona um monitoramento de click para o botao
    if(!inputTarefa.value) return;    //quando nao a valor no imput ele e como falso;
                                        //assi negando se nao tiver valor nenhum ele nao retorna nada para o console.
    criaTarefa(inputTarefa.value); //funçao para elaborar a mensagem no console

});
