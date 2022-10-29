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
function getButton(li){ //ele vai ser criado no li
    li.innerText += ' '; //da um espaco entre o botao e o texto dentro da li
    const botao = document.createElement('button'); //crea o elemento botao
    botao.innerText = 'Apagar'; //coloca nome no elemento botao com apagar
    //botao.classList.add('botao');
    botao.setAttribute('class', 'apagar');
    botao.setAttribute('title', 'Apagar tarefa');    
    li.appendChild(botao); //o boatao e filho de li
    
}
function criaTarefa(msg){  //funcao para criar mensagem da tarefa 
      const li = getLi(); //chama funcao que cria a linha da ul
      li.innerText = msg; // armazena na ul a linha com a mensagem
      getButton(li); //chama a funcao botao e passa o valor dentro do li
      tabela.appendChild(li); 
      getLimpa();   //apos criado chama funcao para apagar o imput
      salvarTarefas();
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

document.addEventListener('click', function(e){ //monitora todo o hmle e onde clicar pega o elemento e armazee no (e);
    const evento = e.target; //atribui ao evento o elemento clicado
    console.log(evento);
    if(evento.classList.contains('apagar')){ //se o evento contem a classe listada 'apagar'; se for verdadeiro realiza o que esta abaixo.
        evento.parentElement.remove(); //procura o pai do evento e remove ele por completo.
        salvarTarefas();
    }

});

function salvarTarefas(){
    const liTarefas = tabela.querySelectorAll('li'); //seleciona todos os elementos que estao dentro da ul(tabela)
    const listaDeTarefa = []; //lista para cebeber valores
    for(let tarefa of liTarefas){  //passa os valores que escao atribuidos a constante liTarefas
        let texto = tarefa.innerText; //atribui a texto cada palavra que passa por tarefa, capiturando so o texto.
        texto = texto.replace('Apagar', '').trim(); //replace retira o texto apagar e deixa apenas  nome
        //trim faz o mesmo que o splice do python removedo os espacos
        listaDeTarefa.push(texto);
        console.log(listaDeTarefa);
    }
    //json salva dados entre sistemas
    const tarefaJSON = JSON.stringify(listaDeTarefa); //faz o array converter para string e convertida para JSON.
    localStorage.setItem('tarefas', tarefaJSON); // salva no local storage do html com key tarefas e value tarefaJSON ou seja aramazna em value o array convertido em stringJSON
}
function adicionaTarefasSalvas(){ // funcao para manter salvo as tarefas
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefa = JSON.parse(tarefas,)
    console.log(listaDeTarefa);
    for(let tarefa of listaDeTarefa){
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();