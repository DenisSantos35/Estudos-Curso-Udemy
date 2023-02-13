const pessoa = {
    nome: 'luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'av brasil',
        numero: 320
    }
}
/*
const {nome:apelido, sobrenome = " ", idade} = pessoa
const {endereco: {rua, numero}, endereco} = pessoa
console.log(apelido)
console.log(sobrenome)
console.log(idade)
console.log(pessoa)
console.log(rua)
console.log(endereco)
const modelo = [10, 20, 30]
const [num1, num2, num3] = modelo
console.log(num2)
*/
const {nome, ...resto} = pessoa
console.log(resto)
const {sobrenome, ...resto2} = resto
console.log(resto2)
const {idade,...resto3} = resto2
console.log(resto3)



 


