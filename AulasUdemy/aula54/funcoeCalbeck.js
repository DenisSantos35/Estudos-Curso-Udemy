//calbeck
function getAleatorio(min = 1000, max = 3000){
    let aleatorio = Math.random() * (max - min) + min 
    return Math.floor(aleatorio);
}
console.log(getAleatorio())

function f1(callbeck){ //executa f1 com funcao dentro de callbeck
    console.log(callbeck)
    setTimeout(function(){ //realiza funcao anonima
        console.log('f1');
        if (callbeck) callbeck(); //testa se tem valor no parametro callbeck, se verdadeiro chama a funcao
                                //neste caso callbeck esta recebendo uma funcao e entre parenteses chama outra funcao
    }, getAleatorio());
    
}

function f2(callbeck){
    console.log(callbeck)
    setTimeout(function(){
        console.log('f2');
        if (callbeck) callbeck();
    }, getAleatorio());
}

function f3(callbeck){
    console.log(callbeck)
    setTimeout(function(){
        console.log('f3');
        if (callbeck) callbeck();
    }, getAleatorio());
}
/*
f1(function(){
    f2(function(){
        f3(function(){
            console.log('Olá mundo!!')
        });
    });
});
*/
// ou podemos criar as funcoes
//primeirio chama a primeira função
 f1(f1callbeck); //chama a funcao f1 e passa como parametro a funcao f1callbeck

 function f1callbeck(){
    f2(f2callbeck)
 }

 function f2callbeck(){
    f3(f3callbeck)
 }

 function f3callbeck(){
    console.log('Ola Mundo!!!')
 }