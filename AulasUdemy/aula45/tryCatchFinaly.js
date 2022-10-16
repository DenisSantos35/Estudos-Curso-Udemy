//trataento de erros
/*try{
    //É executada quando não há erros
    console.log('Abri o arquivo');
    console.log('Manipulei o arquivo');
    
}catch(error){
    //É executada quando há erros
    console.log('ocorreu um erro')
}finally{
    //Sempre
    console.log('Fechei o arquivo');
    console.log('Fim')
}*/
function mostraHora(data){
    if(data && !(data instanceof Date)){ //se data tiver um valor qualquer que não seja instancia
        throw new TypeError('Eseperando estancia de date.'); //captura o erro 
    }
    if (!data){ //se não for data cria uma data
        data = new Date();
    }
    return data.toLocaleTimeString('pt-br',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false

    });
}
try{
    const data = new Date('01-01-1970 12:58:12')
    const hora = mostraHora();
    console.log(hora);
}catch(error){
    //Tratar erro
}finally{    
   console.log('Tenha uma Bom dia')    
}
