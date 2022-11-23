// for each => so pode iterar em array
const lista = [10,20,30,40,50,60,70,80,90];

for(let i of lista){
    console.log(i)
}
/*
lista.forEach((valor, indice, array) => {
    console.log(`${indice} = ${valor} => ${array}`)
    
});
*/
let acumulador = 0;
lista.forEach((valor) => {    
    acumulador += valor
});
console.log(acumulador)