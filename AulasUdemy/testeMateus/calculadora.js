//Bt siginifica before the transformation
//At siginifica after the transformation

const firstNumberBt = document.querySelector('#firstNumber');
//const operation = document.querySelector('#calcular');
const secondNumberBt = document.querySelector('#secondNumber');
const calcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

let firstNumberAt, secondNumberAt;

function validar() {
    firstNumberAt = parseFloat(firstNumberBt.value)
    secondNumberAt = parseFloat(secondNumberBt.value)

    if(isNaN(firstNumberAt)) {
        alert('O primeiro número não foi informado ou é inválido.')
        firstNumberBt.focus()
        return false
    }
    if(operation.selectedIndex <= 0) {
        
        alert('Selecione uma opção.')
        operation.focus()
        return false
    }
    if(isNaN(secondNumberAt)) {
        alert('O segundo número não foi informado ou é inválido.')
        secondNumberBt.focus()
        return false
    }
    return true
}

function efetuar() {
    if(validar()) {
        let resultadoFinal;
        
        switch (operation.selectedIndex) {
            case 1:
                resultadoFinal = firstNumberAt + secondNumberAt
                break
            case 2:
                resultadoFinal = firstNumberAt - secondNumberAt
                break
            case 3:
                resultadoFinal = firstNumberAt * secondNumberAt
                break
            default:
                resultadoFinal = firstNumberAt / secondNumberAt
            }
        resultado.textContent = 'O resultado é ' + resultadoFinal
    }
} 

calcular.addEventListener('click', efetuar);