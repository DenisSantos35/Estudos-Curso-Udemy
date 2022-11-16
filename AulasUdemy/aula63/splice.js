//metodo splice
//               0       1         2        3           4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];
//               -5       -4       -3         -2         -1

//nomes.splice(indice, delete, elem1, elme2, eleme3...elemeN);
//Remova o ultimo indice do elemento, utiliza pop() ou splice();
//const ultimo = nomes.pop();
//observacao o splice retorna sempre um array

//removendo
const ultimo = nomes.splice(-1,Number.MAX_VALUE);
//                                nomes                                   ultimo
console.log(nomes, ultimo); //[ 'Maria', 'João', 'Eduardo', 'Gabriel' ] [ 'Julia' ]

//adicionando
nomes.splice(3,0,'Denis')//                       adicionado indice 3
console.log(nomes) //[ 'Maria', 'João', 'Eduardo', 'Denis', 'Gabriel' ]

nomes.splice(0,0,ultimo.join(''))
console.log(nomes)// [ 'Julia', 'Maria', 'João', 'Eduardo', 'Denis', 'Gabriel' ] retornou julia para o primeiro lugar

//simulando pop() remove gabriel
nomes.splice(-1, 1);
console.log(nomes); //[ 'Julia', 'Maria', 'João', 'Eduardo', 'Denis' ]

//simulando shift() remove julia
nomes.splice(0,1);
console.log(nomes);//[ 'Maria', 'João', 'Eduardo', 'Denis' ]

//simulando push() adiciona jose no ultimo
nomes.splice(nomes.length, 0, 'Jose');//[ 'Maria', 'João', 'Eduardo', 'Denis', 'Jose' ]
console.log(nomes)

//simulando unshift
nomes.splice(0,0,'Pedro'); //adiciona pedro no primeiro
console.log(nomes);//[ 'Pedro', 'Maria', 'João', 'Eduardo', 'Denis', 'Jose' ]

const valor = nomes.indexOf('Eduardo');
console.log(valor);
nomes.splice(valor,1);
console.log(nomes);