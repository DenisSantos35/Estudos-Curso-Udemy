const numero = 31;

if(numero <= 31) {
    console.log(`Verdadeiro`);
}

if (numero >= 0 && numero <=5){
    console.log(`O  ${numero} esta entre 0 e 5`);
} else if (numero <= 10){
    console.log(`O  ${numero} esta entre 6 e 10`);
} else if (numero<=30){
    console.log(`O  ${numero} esta entre 11 e 30`);
} else {
    console.log(`O numero ${numero} NÃO esta entre 0 e 30`)
}