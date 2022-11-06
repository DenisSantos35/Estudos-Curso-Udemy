//Funçoes pode acessar o que esta fora dela no escopo global
//escopo lexico ~> A funcao conhece onde ela foi declarada, ou seja dentro e nos vizinhos dela
//funcoe buscam variaveis dentro de si para executar, nao encontrando ela sai a procura fora buscando sempre a primeira mais perto 
const nome = 'Denis'

function getName(){
    
    console.log();
}

function useSpeakName(){
    const nome = 'Santos'
    getName();
}
useSpeakName()