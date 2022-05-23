//1-  Retorne o url da página atual utilizando o objeto window

const url = window.location
console.log(url)

//2- Seleciona o primeiro elemento da página que
// possua a classe ativo

const classeAtivo = document.querySelector('.ativo')
console.log(classeAtivo)

//3 - Retorne a linguagem do navegador

const linguagem = navigator.language
console.log(linguagem)

//4-  Retorne a largura da janela 

const larguraJanela = window.innerHeight
console.log(larguraJanela)

//5-  Retorne a largura d0 h1

const titulo = document.querySelector('h1')
console.log(titulo.clientHeight)

