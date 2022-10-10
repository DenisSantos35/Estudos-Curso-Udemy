let valorA = 'A';
let valorB = 'B';
let valorC = 'C';
console.log(valorA, valorB, valorC)

[valorA, valorB, valorC] = [valorB, valorC, valorA]
console.log(valorA, valorB, valorC)
let aux = valorA
valorA = valorB
valorB = valorC
valorC = aux
console.log(valorA, valorB, valorC)