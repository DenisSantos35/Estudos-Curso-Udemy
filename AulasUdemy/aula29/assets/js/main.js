//outra forma de selecionar a tag do html em js
//const h1 = document.querySelector(".conteiner h1") ou
/*let resposta = document.getElementById('res');// variavel contendo evento do html
//lista contendo os dias e meses
let mes = ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outuro', 'Novembro', 'Dezembro'];
let dia = ['Domingo', 'Segunda-feira', 'Terca-feira', 'Quarta-feira', 'Quinta-feira', 'sexta-feira', 'sabado']
//armazena data completa a variavel data
let data = new Date(); 

let dataDia = data.getDay(); //armazena na variavel o valor correspondente a um dia da semana de 0  a 6
let dataMes = data.getMonth(); //armazena na variavel o valor corespondente ao mes de 1 a 12

//declaraçao de variaveis
let novaData;
let novoMes;
let novoDia;
let novoAno;
let hora;

function getData(calendario, datas){ //recebe valor coespondente ao dia 0 - 6, e ecebe a lista com os nomes dos dias
    switch(calendario){// pega o valor correspondete ao dia da semana 0 - 6
        case 0: //caso o dia da semana seja 0
            return datas[calendario] //retorna o valor da lista na posicao 0
        case 1: // caso seja 1
            return datas[calendario] //retorna o valor na lista na posicao 1
        case 2:
            return datas[calendario]    
        case 3: 
            return datas[calendario]
        case 4:
            return datas[calendario]
        case 5:
            return datas[calendario]
        case 6: 
            return datas[calendario]
        case 7:
            return datas[calendario]
        case 8: 
            return datas[calendario]
        case 9:
            return datas[calendario]
        case 10:
            return datas[calendario]
        case 11: 
            return datas[calendario]
    }
}
//pega o valor correspondente ao dia de 1 a 6, envia para a funcao, envia para a funcao a lista com os nomes dos dias
novaData = getData(dataDia,dia) // apos passar os valores para funcao armazena o resultado na variavel
novoMes = getData(dataMes, mes)
novoDia = data.getDate() //armazena na variavel o dia entre 1 e 31
novoAno = data.getFullYear() // armazena na variavel o vaor do ano atual
hora = data.getHours() //armazena na variavel a hora atual
let minutos = data.getMinutes()
resposta.innerHTML = `${novaData}, ${novoDia} de ${novoMes} de ${novoAno} <br> ${hora}:${minutos} `
*/
/*
let resultado = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};
resultado.innerHTML = data.toLocaleString('pt-br', opcoes)

function zeroEsquerda(){
    return num >= 10 ? num : `0${num}` num e maior ou igual a 10 ? verdadeiro retorna num: falso retorna 0+num
}
*/
let resultado = document.querySelector('.container h1')
const data = new Date();
const diaSemana = data.getDay();
const mes = data.getMonth();


function getDatas(dias, meses){
    const dia = ['domingo','segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', ]
    const mes = ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outuro', 'Novembro', 'Dezembro'];
    return (`${dia[dias]}, ${data.getDate()} de ${mes[meses]} de ${data.getFullYear()}<br> ${data.getHours()}:${data.getMinutes()}`)
}

resultado.innerHTML = `${getDatas(diaSemana, mes)}`


