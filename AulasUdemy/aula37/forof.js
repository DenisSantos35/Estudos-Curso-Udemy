//for classic -> geralmente com iteraveis, so funciona com(array ou strings)
//for in -> retorna indice ou chave, so funciona com (string, array ou objetos)
//for of -> retorna o valor, so funciona com iteraveis (arrays ou string)
/*const nome = 'Denis';
const nomes = ['Denis', 'Joyce', 'Marcia', 'istefane']
console.log(nome.length);
/*
for(let i = 0; i < nome.length; i++){
    console.log(i, nome[i]);
}

for(let indice in nome){
    console.log(indice, nome[indice]);
}

//acessa diretamente cada letra da string ou objeto
for(let valor of nomes){
    console.log(valor);
}
console.log('~~=~=~=~=~=~=~=~~')

nomes.forEach(function(valor, indice, array){ //objeto.loop que chama uma funcao e retorna, o valor do objeto; o indice do objeto e o array completo 
    console.log(valor, indice, array)
})*/

const pessoa = {
    nome: 'Denis',
    sobrenome: 'Santos',
    idade: 31
};
for(let key in pessoa){
    console.log(key, pessoa[key])
}
