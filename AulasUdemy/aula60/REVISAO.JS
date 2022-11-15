function recursividade(max){
    if (max >= 10){        
        return;
    }
    max++;
    console.log(max)
    recursividade(max);
}

recursividade(0)
