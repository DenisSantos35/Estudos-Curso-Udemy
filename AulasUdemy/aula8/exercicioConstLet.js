/*   
Denis Diogo dos Santos tem 32 anos, pesa 50 kg
tem 1.68 de altura e seu imc e 17.72
Denis nasceu em 1990
*/
const nome = 'Denis Diogo';
const sobrenome = 'Santos';
const idade = 32;
const peso = 50;
const altura = 1.68;
let imc; // peso / (altura * altura)
imc = peso / (altura ** 2)
let anoNascimento;
anoNascimento = 1990

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} Kg
tem ${altura} de altura e seu imc é ${imc}.`) // template string forma da escrita
console.log(`${nome} nasceu em ${anoNascimento}`)