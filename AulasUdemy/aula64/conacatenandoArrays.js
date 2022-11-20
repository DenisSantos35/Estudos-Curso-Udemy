//concatenando arrays

//para concatenar existem duas maneiras, uma com concat e outra com spred operator vejamos os exemplos;
//usando concat
const a1 = [1, 2, 3,];
const a2 = [4, 5, 6];
//const a3 = nuns1.concat(nuns2, [7,8,9], ['Denis'])

//... rest operator ~> ... spread espalha os array literal
const a3 = [...a1,'Denis', ...a2, ...[7,8,9]];

console.log(a3)