const pessoas = [
    {id: 3, nome: 'Denis' },
    {id: 2, nome: 'Joyce'},
    {id: 1, nome: 'Marcia'},
];

/*const novasPessoas = {}; //cria novo objeto
for(const pessoa of pessoas){ //itera em pessoa os parametros de pessoas
    //console.log(pessoa) //{ id: 3, nome: 'Denis' }{ id: 2, nome: 'Joyce' }{ id: 1, nome: 'Marcia' }
    const {id} = pessoa; // 3, 2, 1
    //console.log(id)
    novasPessoas[id] = {...pessoa}; 
}*/

const novasPessoas = new Map(); //cria novo objeto
for(const pessoa of pessoas){ //itera em pessoa os parametros de pessoas
    //console.log(pessoa) //{ id: 3, nome: 'Denis' }{ id: 2, nome: 'Joyce' }{ id: 1, nome: 'Marcia' }
    const {id} = pessoa; // 3, 2, 1
    //console.log(id)
    novasPessoas.set(id, {...pessoa}); 
}

console.log(novasPessoas);
console.log(novasPessoas.get(2));
//retirando dados por desconstrurctor
for(const [identifier, {id, nome}] of novasPessoas){
    console.log(identifier, id, nome);
}

for(const pessoa of novasPessoas.entries()){
    console.log(pessoa);
}

for(const pessoa of novasPessoas.values()){
    console.log(pessoa);
}

for(const pessoa of novasPessoas.keys()){
    console.log(pessoa);
}

novasPessoas.delete(2);
console.log(novasPessoas);