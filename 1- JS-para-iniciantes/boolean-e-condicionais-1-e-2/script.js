console.log('Oi!')

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

let myAge = 39;
let emmaAge = 8;

if(myAge > emmaAge){
  console.log("É maior!");
}else if(myAge == emmaAge){
  console.log("É igual!");
}else{
  console.log("É menor!");
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); //retorna 3
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy

var nome = 'Andre'; // Truthy (Strings are Truthy)
console.log(!!nome);

var idade = 28; // Truthy (numbers are Truthy)
console.log(!!idade);

var possuiDoutorado = false; //Falsy (false is Falsy)
console.log(!!possuiDoutorado);

var empregoFuturo; // Falsy (undefined is Falsy)
console.log(!!empregoFuturo);

var dinheiroNaConta = 0; // Falsy ( 0 is Falsy)
console.log(!!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china){
  console.log('Brasil tem mais habitantes!');
}else if(brasil == china){
  console.log('Brasil tem o mesmo número de habitantes que a China');
}else{
  console.log('Brasil tem menos habitantes!')
}



// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// Falso (&& retorna o último valor verdadeiro ou o primeiro falso)
//No &&, todas as condições tem que ser verdadeiras para que o retorno seja verdadeiro.

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

// Cão (|| retorna o último valor verdadeiro)
// No ||, basta uma condição ser verdadeira para que o retorno seja verdadeiro