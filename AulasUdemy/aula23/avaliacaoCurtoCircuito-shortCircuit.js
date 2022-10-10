/*
&& -> false && true = false "O valor mesmo"
|| -> true || false = true "vai retornar o valor verdadeiro"
Falsy values
* false -> unico literal
0
''; ""; `` -> espaço vazio seja em aspas simples; duplas ou crase;
null / undefined
NaN

console.log('Denis' && 0 && 'joyce')

console.log('Denis' && true && 'joyce')

console.log(NaN && true && 'joyce')


function falaOi(){
    return 'oi';
}

const vaiExecutar = '0';

console.log(vaiExecutar && falaOi())

console.log(null && 0 && 'maria')

console.log(0 || 'Joyce' || null || 'Maria' || undefined || 5 || false || true); //retorna o primeiro
// valor verdadeiro

const corUsuario = 'red';
const corPadrao = corUsuario || 'preto'

console.log(corPadrao)
*/
const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = undefined

console.log(a || b || c || d || e)

