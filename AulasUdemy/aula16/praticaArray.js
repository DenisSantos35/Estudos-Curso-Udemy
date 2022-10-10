let somar = function soma(num1 =0, num2=0){
    let som = num1 + num2
    console.log(som)

}

let subtrair = function subtracao(num1=0, num2=0){
    let subtra =  num1 - num2
    console.log(subtra)
}

let multiplicar = function multiplicacao(num1=1, num2=1){
    let mult =  num1 * num2
    console.log(mult)
}

const matematica = []
matematica.push(somar, subtrair, multiplicar)
console.log(matematica)
console.log(matematica[1])