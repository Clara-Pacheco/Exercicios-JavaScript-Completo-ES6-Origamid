//1- Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; // retorna : 35
console.log(total);

//2- Crie duas expressões que retornem NaN
/*Uma forma de retornar um NAN é fazer qualquer operação com uma string
 que não seja soma, como por exemplo: subtração, multiplicação, divisão. 
 A soma de string e números sempre irá concatenar. */
let expressao1 = 'Clara10' / 5;

console.log(expressao1);

let expressao2 = +'28s' / 2;

console.log(expressao2);

//3- Somar a string '200' com o número 50 e retornar 250

let soma = +'200' + 50;

//4-Transformei o 20o string em número 200 usando o operador unário + na frente

console.log(soma);

//5- Incremente o número 5 e retorne o seu valor incrementado

let i = 5;
console.log(++i);

//6- retorna o valor de 5 incrementado, ou seja, 6, através do pré incremento.

//7- Como dividir o peso por 2?

var numero = +'80' /2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'

console.log(peso);

console.log(typeof peso)