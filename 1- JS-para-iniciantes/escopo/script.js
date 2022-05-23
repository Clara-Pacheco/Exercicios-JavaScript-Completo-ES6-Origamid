//1- Por qual motivo o código abaixo retorna com erros?
// {
//   var cor = 'preto';
//   const marca = 'Fiat';
//   let portas = 4;
// }
// console.log(var, marca, portas);

/*R: Porque a constante 'marca' e a variável com let 'portas'
 são variáveis definidas dentro do BLOCO e não são visíveis fora
 dele. (Escopo local). Já a variável criada com var 'cor' é visível
 fora do bloco.O var sofre o 'hosting', é declarada fora do bloco,
 início do código, e atribuída quando o código entra no bloco. Ao chegar no console.log, ele mostraria a cor 'preto', mas teríamos que usar o nome da variável 'cor' e não a palavra reservada 'var'. Para corrigir esse erro, poderíamos fazer:  */

const marca = 'Fiat';
let portas = 4;
 {
  var cor = 'preto';  
}
console.log(cor, marca, portas);

//ou

 {
  var cor = 'preto';  
  const marca = 'Fiat';
  let portas = 4;
}
console.log(cor);

//ou

 {
  var cor = 'preto';  
  const marca = 'Fiat';
  let portas = 4;
  console.log(cor, marca, portas);
}


//2- Como corrigir o erro abaixo?

const dois = 2;
function somarDois(x) {
  return x + dois;
}

function dividirDois(x) {
  return x / dois;
}

console.log(somarDois(4));
console.log(dividirDois(6));

/*R: A constante 'dois' é uma variável de bloco, criada no bloco da primeira função e só visível para a mesma. Ela não é visível dentro do bloco da segunda função, por isso o erro: 'dois' is not defined
Para corrigir esse erro, podemos declarar a constante 2 fora do bloco da primeira função, ou seja, no escopo global da aplicação.Dessa forma, ela será vista e poderá ser acessada em toda a aplicação */

//3- O que fazer para total retornar 500?
var numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);

//A variável 'numero' criada com let é uma variável com escopo local, ou seja, só é visível dentro do bloco onde foi declarada.
//Já a variável 'numero' criada com var, é uma variável com escopo global, ou seja, é visível e acessada em toda a aplicação.