const pessoa = {
    nome: 'Denis',
    sobrenome: 'santos',
    idade: '31',
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};
//const nome = pessoa.nome; // atribui Denis a nome
//const [nome, idade,rua,numero] = [pessoa.nome, pessoa.idade, pessoa.endereco.rua,pessoa.endereco.numero]; // atribui Denis -> nome; 31 -> idade e etc...
//Atribuiçao por desestruturação
//Neste comando quando passado dentro de chaves o js busca a variavel ja existente 
//cria uma nova variavel e atribui o valor a ela aproveitando o valor do objeto
//const {nome = '', sobrenome, idade} = pessoa; //podemos atribuir por valor padrao
//-----------------****----------------------***----------------------------****----------------
//para mudar o nome da variavel utilizamos o nome atribuido no objeto seguido de dois pontos (:) e o novo
//nome, como podemos ver abaixo.
//const {nome: name = '', sobrenome: lastName = '', idade: old = ''} = pessoa;
//-----------------****----------------------***----------------------------****----------------
//No caso abaixo tinha um objeto dentro de um objeto, mudamos o nome de endereco para apenas objetos simples, criando variaveis independentes de rua e numero.
// e apos tambem atribuimos todo o objto dentro do objeto a constante endereço, ou seja chamamos endereço e isso nos mostra que o Js mantem o objeto e muda apenas momentaneo.
//no caso rua alem de atribuir o valor para rua mudamos o nome para r e colocamos um valor caso nao tenha nenhum valor dentro do objeto oconsole mostra o novo valor atribuido
//const{endereco: {rua: r = 'Av santos dumon', numero}, endereco} = pessoa;
//-----------------****----------------------***----------------------------****----------------
//console.log(r, numero, endereco)
//console.log(lastName, old);
//console.log(nome, sobrenome, idade);
//console.log(pessoa['idade']);

//Aqui atibuimos a constante nome o valor de Denis q=ue esta dentro do objeto pessoa e na constante resto, atribuimos o restante do objeto pessoa.
const {nome, ...resto} = pessoa
console.log(nome, resto)