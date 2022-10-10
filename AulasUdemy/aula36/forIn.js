//For in le os indices ou chaves do objeto
/*
const frutas = ['pera', 'maca', 'uva'];

for(let indice = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}
 for(let indice in frutas){
    console.log(frutas[i]);
 }
 */
const pessoa = {
    nome: 'Denis',
    sobrenome: 'Santos',
    idade: 31
};
console.log(pessoa.nome); //acessa o objeto na posicao nome
console.log(pessoa['nome']); //acessa o objeto na posicao nome

//laco de repeticao passa o indice no caso do objeto os indices sao 
//nome; sobrnome; idade
for(let chave in pessoa){
    console.log(chave, pessoa[chave])
}