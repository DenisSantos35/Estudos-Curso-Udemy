//Generator function
/*
function* generator1(){
    //Aqui pode ter qualquer código...
    yield 'Valor 1'
    console.log('ola')
    //Aqui pode ter qualquer código...
    yield 'Valor 2'
    //Aqui pode ter qualquer código...
    console.log('my name is:')
    yield 'Valor 3'
    console.log('Denis')
    //Aqui pode ter qualquer código...
}

const g1 = generator1();
for (let i of g1){
   console.log(i)
}
//{ value: 'Valor 1', done: false } value -e valor e done = ja terminou o gerador; como esta no primeiro retorna false
*/
/*
function* gerador2(){
    let i = 0;
    while(true){
        yield i;
        i ++;
    }
}
const g2 = gerador2();
for(let i of g2){
    console.log(i);
    if(i === 100){
        break;
    }
}
*/
/*

function* geradora3(){
    yield 1;
    yield 2;
    yield 3;
}

function* geradora4(){
    yield* geradora3();
    yield 4;
    yield 5;
    yield 6;

}

const g4 = geradora4();
console.log(g4.next().value);
for(let i of g4){
    console.log(i);
}
*/
function* geradora5 (){
    yield function(){
        console.log('Vim do y1');
    };
        
    //coloque mais codigos
    yield function(){
        console.log('Vim da v2');
    };

    return console.log('Vim do return');   

}
const g5 = geradora5();
const func = g5.next().value
const func1 = g5.next().value

func();
func1();
console.log(g5.next())