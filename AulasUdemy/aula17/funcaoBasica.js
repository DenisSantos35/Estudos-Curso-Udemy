/*function saudacao(nome){    
    return `Bom dia ${nome}`
}
//const nome = ['luiz', 'marcos', 'denis', 'joao']
const variavel = saudacao('Luiz')
console.log(variavel)
//saudacao('marcos')
//saudacao(nome.slice(1,3))*/

/*function soma(num1=0,num2=0){
    return num1 + num2

}
const valor = soma(3,12)
console.log(valor)*/

//funcao anonima ou funcao dentro de variavel
/*const raiz = function (n){
    return n ** 0.5
};

console.log(raiz(9))*/

// erou function
const raiz = (n) => {
    return n ** 0.5
};

console.log(raiz(9))

const raiz2 = n => n ** 0.5

console.log(raiz2(144))