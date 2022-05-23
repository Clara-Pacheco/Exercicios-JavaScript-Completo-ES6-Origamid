//1- Crie uma função para verificar se um valor é Truthy

function verifyTruthy (value){
  if(!!value == true){
    console.log(`O valor ${value} é Truthy`);
  }else{
    console.log(`O valor ${value} é Falsy`);
  }
}

verifyTruthy('Clara'); //Truthy- Strings são valores thruthy
verifyTruthy(0); //Falsy- 0 é um valor Falsy
verifyTruthy(undefined);  //Falsy- undefined é um valor Falsy
verifyTruthy(2);  // Truthy- Números são valores Truthy
verifyTruthy('');  //Falsy- Strings vazias são valores Falsy
verifyTruthy(' '); //Truthy- Strings são valores Truthy- aqui é uma string com 1 espaço.

//2- Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(lado){
  return lado * 4
}

console.log(perimetro(2));
console.log(perimetro(5));

//3- Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function fullname(name,surname){
  return `My full name is ${name} ${surname}.`
}

console.log(fullname('Clara','Gonçalves'));

//4- Crie uma função que verifica se um número é par

function isEven(number){
  if(number % 2 == 0){
    console.log(`The number ${number} is even!`)
  }else{
    console.log(`The number ${number} is odd`)
  }
}

isEven(2); // even
isEven(3); //odd
isEven(53685); //odd
isEven(98462); //even

//5- Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function typeofData(value){
  return`The value ${value} is a ${typeof(value)}`;
}

console.log(typeofData(2));
console.log(typeofData('Clara'));
console.log(typeofData(true));
console.log(typeofData(undefined));

//6- addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function(){
  console.log('My full name is Clara Gonçalves');

});

//7- Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
//173
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

// 20 e 193

console.log(precisoVisitar(20));
console.log(jaVisitei(20));

