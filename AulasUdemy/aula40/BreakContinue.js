const numeros = [1,2,3,4,5,6,7,8,9];

//continue continua para proxima iteração
//break sai do laço
/*for(let num of numeros){

    if(num === 2 || num === 5){
        console.log(`Pulei o numero ${num}`);
        continue;
    }
    console.log(num);

    if(num === 7){
        console.log(`Numero ${num} encontrado. Sindo...`)
        break;
    }    
}*/

/*for(let num in numeros){
    let numer = numeros[num]
    console.log(numer)
    if(numer === 2 || numer === 5){
        console.log(`Pulei o numero ${numer}`);
        continue;
    }
    console.log(numer);

    if(numer === 7){
        console.log(`Numero ${numer} encontrado. Sindo...`)
        break;
    }    
}*/

for(let i = 0; i < numeros.length; i++){
    let numer = numeros[i]
    if(numer === 2 || numer === 5){
        console.log(`Pulei o numero ${numer}`);
        continue;
    }
    console.log(numer);

    if(numer === 7){
        console.log(`Numero ${numer} encontrado. Sindo...`)
        break;
    }    
}
