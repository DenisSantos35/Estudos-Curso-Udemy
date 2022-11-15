/*
//indices          0         1         2 
const nome = ['Eduardo', 'Maria', 'Joana'];
//const nomes = Array(); literal
//const nom = new Array('marcos', 'juca'); usando construtor
nome[2] = 'Joao';
delete nome[2]; //delete utiliza quando quer remover um item do array sem perder os indices
console.log(nome);
*/
/*
//array e dado por valores por referencia
//indices          0         1         2 
const nome = ['Eduardo', 'Maria', 'Joana'];
const novo = nome;

console.log(novo, nome); //[ 'Eduardo', 'Maria', 'Joana' ] [ 'Eduardo', 'Maria', 'Joana' ]
novo.pop();
console.log(novo, nome); //[ 'Eduardo', 'Maria' ] [ 'Eduardo', 'Maria' ]
nome.pop()
console.log(novo, nome); //[ 'Eduardo' ] [ 'Eduardo' ]
*/
/*
//espalhamento ou copia sem que altere o valor de um no outro.

const nome = ['Eduardo', 'Maria', 'Joana'];
const novo = [...nome];
//                                   novo                            nome
console.log(novo, nome); //[ 'Eduardo', 'Maria', 'Joana' ] [ 'Eduardo', 'Maria', 'Joana' ]
novo.pop();               //          novo                      nome
console.log(novo, nome); //[ 'Eduardo', 'Maria' ] [ 'Eduardo', 'Maria', 'Joana' ]
nome.shift()                //        novo                  nome
console.log(novo, nome); // [ 'Eduardo', 'Maria' ] [ 'Maria', 'Joana' ]
*/
//tamanho do Array utiliza se Array.length ~> length não e metodo e sim atributo, atributos não se utiliza parentes
/*
const nome = ['Eduardo', 'Maria', 'Joana'];
console.log(nome.length); //3 elementos nao confundir com indices
*/
/*
//remoção de array com Array.pop() ~> pop() e um metodo por isso a utilização de parenteses ele remove o ultimo elemento doarray.
const nome = ['Eduardo', 'Maria', 'Joana'];
const removido = nome.pop();
console.log(`O item removido do array foi "${removido}"`);
console.log(`apos remocao do item" ${removido}", o array ficou atribuido da seguinte maneira: "${nome}"`)

const removidoInicio = nome.shift();
console.log(`O item removido no inicio do array foi "${removidoInicio}"`);
console.log(`apos remocao do item" ${removidoInicio}", o array ficou atribuido da seguinte maneira: "${nome}"`);

//Adicionando ao array
nome.push('Denis');
console.log(`Foi adicionado "Denis" no final do array; agora o array ficou assim: "${nome}"`)
nome.unshift('Mateus');
console.log(`Foi adicionado "Mateus" no inicio do array; agora o array ficou assim: "${nome}"`)
nome.splice(1,0,'Joao');
console.log(`Na posicao 1 foi adicionado "Joao" o aray Ficou assim ${nome}`);
nome.splice(2,1,'Marcos');
console.log(`Na posicao 2 foi removido "Maria" e adicionado "marcos" o aray Ficou assim ${nome}`);
*/

/*
let nome = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];
console.log(nome.length, nome, typeof(nome));
                                //                                     novo                 nome
//const novo = nome.slice(1,3); //slice fatia o array e retorna [ 'Maria', 'Joana' ] [ 'Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana' ]
//console.log(novo, nome);
const novo = nome.slice(0,-1); //slice fatia o array e retorna
                        //              novo                                        nome
console.log(novo, nome);//[ 'Eduardo', 'Maria', 'Joana', 'Wallace' ] [ 'Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana' ]

for(let i in nome){
    let novo = nome.slice(0,-1);    
    nome = novo;
    console.log(novo);
}
*/

/*
//converter string em array
const nome = 'Denis Diogo dos Santos';
const lista = nome.split(' '); // no caso dessa situacao o split encontra os espaços  separa e colca em um array.
console.log(lista);
*/

const nome = ['Dennis', 'Diogo', 'dos', 'Santos'];
const novo = nome.join(' ');
console.log(novo)
console.log(typeof(novo))