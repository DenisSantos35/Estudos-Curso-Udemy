/*let a ='A'; // B
let b = 'B'; //C
let c = 'C'; //A
//Atribuição via desestruturação
const letras = [b, c, a];
//restruturação lado direito variaveis esquerdo aray
[a, b, c] = letras;
console.log(a,b,c)


//               0  1  2  3  4  5  6  7  8  indice do array
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
//const primeiroNumero = numeros[0];
//no caso abaixo primeiro numero recebe o indice 0 o array numeros
// segundo numero recebe indice 1 do array numeros
//...resto (trespontos resto) pega o restante do array e armazena em resto
const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros;
//... rest, para pegar o resto de algo
//... spread para espalhar algo
console.log(primeiroNumero, segundoNumero,terceiroNumero);
console.log(resto);
*/

/*
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
//const primeiroNumero = numeros[0];
//no caso abaixo primeiro numero recebe o indice 0 o array numeros
// segundo numero recebe indice 1 do array numeros
//...resto (trespontos resto) pega o restante do array e armazena em resto
const [um, ,tres, ,cinco, ,sete,...resto] = numeros;
//... rest, para pegar o resto de algo
//... spread para espalhar algo
console.log(um, tres, cinco, sete);
console.log(resto);
*/

/*
//                 0 1 2    0 1 2    0 1 2          
const numeros = [ [1,2,3], [4,5,6], [7,8,9] ];
//                   0        1        2
const[,,[,,nove]] = numeros;
console.log(nove)
const[lista1, lista2, lista3] = numeros;
console.log(lista2, lista1[2])
console.log(numeros[1][2])
*/
const numeros = [ [1,2,3], [4,5,6], [7,8,9] ];
let lista1, lista2, lista3;
let resultado = getArrays(numeros);
console.log(resultado);

function getArrays(numeros){
    [lista1, lista2, lista3] = numeros;
    return [lista2,lista3[1],lista1[0]];
}
