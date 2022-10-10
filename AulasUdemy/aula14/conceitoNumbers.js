//IEEE - 754-2008
let num1 = 0.7
let num2 = 0.1

num1 += num2;
num1 += num2;
num1 += num2;
num1 = Number(num1.toFixed(2))  //arredonda para 2 casas decimais
//num1 = parseInt(num1)  passa somente o numero inteiro
//num1 = Math.floor(num1) arredonda para inteiro porem para numero abaixo
//num1 = Math.ceil(num1)
console.log(num1)
console.log(Number.isInteger(num1))

/*let num = 3000;
let num2 = 2.5;
//num = num.toString();


console.log(`binario de ${num} ${num.toString(2)}`)  //binario
console.log(`hexadecimal de ${num} ${num.toString(16)}`) //hexa
console.log(typeof(num)) //tipo
console.log(num.toFixed(2)) //arredondamento
console.log(Number.isInteger(num2)); //verifica numero inteiro retorna valor booleano
let temp = 10 * 'ola'  //retorna NaN
console.log(Number.isNaN(temp)) //verifica se temp e NaN nao e um numero*/
