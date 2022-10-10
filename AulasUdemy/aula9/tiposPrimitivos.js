//Temos como dados primitivos --> /string, Number, undefined, null, boolean
// podemos criar strings de varias maneiras
const nome = 'Denis'; // string
const nome1 = "Denis"; // string
const nome2 = `Denis`; //string
const num = 10; //Number
const num2 = 15.5; //Number
let nomeAluno; //undefined => não aponta para lugar nenhum na memoria
//Declaração sem inicilizar obs.: sos se pode com let
let sobrenomeAluno = null; // Nulo -> não aponta para lugar nenhum na memoria
const aprovado = true; // existe somente 2 valores true or false (lógico)

console.log(typeof(num2), num2); //verifica o tipo da variavel

let a = 2;
let b = a;
console.log(a,b) // valor de a 2 e b 2
a = 3
console.log(a, b)// valor de a e modificado para 3 e b continua 2