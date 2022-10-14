//Escreva uma funçao que recebe 2 numeros e retorne o maior deles
/*function maiorNumero(num1, num2){
    if(num1 > num2){
        return `O numero ${num1} é maior que o numero ${num2}`;
    }else if(num1 < num2){
        return `O numero ${num2} é maior que o numero ${num1}`;
    }else{
        return `O numero ${num1} é igual o numero ${num2}`;
    }
}
let num1 = 50;
let num2 = 10 * 5;
 let maior = maiorNumero(num1,num2);
 console.log(maior);*/
//funcao retornando operador ternario
 function max(x,y){
    //if(x > y) return x
    //return y
    return x > y ? x : y
 }
 //erofunction
 const maior = (x,y) => {
    return x > y ? x : y
 }
 console.log(maior(10,2));

 //melhorando funçao

 const maxi = (x,y) => x > y ? x : y; //quando a funçao retornar somente uma linha pode se retirar o return e colocar tudo em uma mesma linha
 console.log(max(100,50));