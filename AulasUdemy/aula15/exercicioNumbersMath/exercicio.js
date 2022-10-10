let msg = document.getElementById('numero-titulo')
let resposta = document.getElementById('resposta')

let numero = Number(prompt('Digite um numero'))
let raiz = Math.sqrt(numero)
msg.innerHTML = `Seu numero é ${numero}`
resposta.innerHTML += `Raiz Quadrada: ${raiz} <br/>`
resposta.innerHTML += `${numero} é inteiro: ${Number.isInteger(numero)}<br/>`
resposta.innerHTML += `É NaN: ${Number.isNaN(numero)}<br/>`
resposta.innerHTML += `Arredondando para baixo: ${Math.floor(numero)}<br/>`
resposta.innerHTML += `Arredondando para cima: ${Math.ceil(numero)}<br/>`
resposta.innerHTML += `Com duas casas decimais ${numero.toFixed(2)}<br/>`
resposta.innerHTML += `<strong>>>FIM<<</strong>`


