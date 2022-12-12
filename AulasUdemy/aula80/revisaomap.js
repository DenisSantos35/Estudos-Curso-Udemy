const pessoas = [
    {id: 3, nome: 'Denis'},
    {id: 2, nome: 'Joyce'},
    {id: 1, nome: 'Marcia'},
];

const novaPessoa = {};

for(let {id, nome} of pessoas){
    novaPessoa[id] = {id, nome}
}
console.log(novaPessoa)

const novaPessoa1 = {};

for(const pessoa of pessoas){
    const {id} = pessoa
    novaPessoa1[id] = {...pessoa}
    
}
console.log(novaPessoa1)
 const novaPessoa2 = new Map();
for(const pessoa of pessoas){
    const {id} = pessoa
    novaPessoa2.set(id, {...pessoa});
    
}
console.log(novaPessoa2)

for(const [identifier, {id,nome}] of novaPessoa2){
    console.log(identifier,id,nome)
}

for(const pessoa of novaPessoa2.keys()){
    console.log(pessoa)
}

for(const pessoa of novaPessoa2.values()){
    console.log(pessoa)
}