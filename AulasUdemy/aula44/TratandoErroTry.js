//Tratamento de erros com try, catch, trow
/*
try{ //testa a situação abaixo se for um erro execute o catch e armazena o erro na palavra em parnteses
    console.log(naoExisto);
}catch(error){ //se for um erro exiba a mensagem abaixo
    console.log('Erro...Verifique e digite novamente'); //se o bloco acima for um erro mostra esta mensagem
    console.log(error); //mostra o erro que foi atribuido a esta variavel    
}
*/
function soma(n1, n2){

    if(typeof n1 !== 'number' || typeof n2 !== 'number'){
        //throw(`n1 ou n2 precisam ser numeros`); 
        //throw new error(`n1 ou n2 precisam ser numeros`); //fucoes construturas utiliza o throw new e o tipo de erro 
        throw new ReferenceError(`n1 ou n2 precisam ser numeros`); //fucoes construturas utiliza o throw new e o tipo de erro 
    }
    return n1 + n2
}
//se ocorrer algum erro no bloco try o bloco catch é executado
//se não ocorrer algum erro no bloco try o bloco try sera executado
try{
    console.log(soma(1, 10));
    console.log(soma('1', 10));
}catch(error){
    //console.log(error);
    console.log('Não mostrar mensagem de erro para o usuario...  sim algo mais amigavel.')
}
