/*
const tresHoras = 60 * 60 * 3 * 1000; //segundos * segundos = 1 hora * 3 horas * 1000(ms)
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia); //01/01/1970 Timestamp unix. ou época unix

const data = new Date(2022,09,10, 10,10,59,1000); //ano,mes,dia, horas,minutos,segundos,milesimode segundo; é necessario no minimo dois parametros o ano e o mes
//configurado com gmt - 3 horas.
*/
const data = new Date('2022-10-09 20:20:59.999'); //ano-mes-dia(espaco)hora:min:segun.milesimo ou ano-mes-diaThora:min:segun.milesimo
console.log('Dia', data.getDate()); //extrai da variavel data o dia
console.log('Mes', data.getMonth() + 1); //extrai da variavel data do mes e inicia mes no 0 por isso + 1
console.log('Ano', data.getFullYear()); //extrai da variavel data o ano
console.log('Hora', data.getHours()); //extrai da variavel data o hora
console.log('Min', data.getMinutes()); //extrai da variavel data o minutos
console.log('Seg', data.getSeconds()); //extrai da variavel data o segundos
console.log('ms', data.getMilliseconds()); //extrai da variavel data o milesimo de segundos
console.log('Dia semana', data.getDay()); //extrai da variavel data o dia da semana 
console.log(data.toString()); // converte milesimo de segundo para gring
console.log(Date.now());