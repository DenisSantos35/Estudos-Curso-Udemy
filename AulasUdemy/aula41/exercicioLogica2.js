//Escreva uma função chamada ePaisagem que
//recebe dois argumentos, largura e altura
//de uma imagem (number).
//retorne true se a imagem estiver no modo 
//paisagem
/*
function ePaisagem (largura, altura){
    return largura > altura
}
console.log(`a imagem é paisagem? ${ePaisagem(100,20)}`)
*/
const ePaisagem = (largura,altura) => largura > altura
console.log(`a imagem é paisagem? ${ePaisagem(100,20)}`)