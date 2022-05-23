//1- Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

let person = {
  name: 'Clara',
  surname: 'Gonçalves',
  age: 39,
  isStudying: function(){
    return true;
  },
  isTired: function(hoursOfSleep){
    if(hoursOfSleep < 8){
      return 'Yes, very tired!';
    }else{
      return 'No,I had a good night of sleep';
    }
  }
}

//2- Crie um método no objeto anterior, que mostre o seu nome completo

person.fullName = function(name,surname){
  return `My full name is ${this.name} ${this.surname}`;
}

//3- Modifique o valor da propriedade preco para 3000

var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco= 3000;

//4- Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

let dog= {
  breed: 'labrador',
  color:'#000000',
  age: 10,
  barksWhenSeesAMan: function(gender){
    if(gender == 'man'){
      return true;
    }else{
      return false;
    }
  }

}


