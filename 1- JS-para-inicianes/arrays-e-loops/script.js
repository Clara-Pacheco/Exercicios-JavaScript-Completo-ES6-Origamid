//1- Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

let brasilVenceuCopa = [1959,1962,1970,1994,2002];

//2- Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

brasilVenceuCopa.forEach(function(ano){
    console.log(`O Brasil ganhou a copa de ${ano} `);
})

for(ano=0;ano<brasilVenceuCopa.length;ano++){
  console.log(`O Brasil ganhou a copa de ${brasilVenceuCopa[ano]}`);
}

//3- Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(i=0;i<frutas.length;i++){
  console.log(frutas[i]);
  if(frutas[i]==='Pera'){
    break;
  }
}

//4- Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

let ultimaFruta = frutas[frutas.length-1]
console.log(ultimaFruta);