//1- Retorne no console todas as imagens do site

const images = document.querySelectorAll('img')
console.log(images)

//2- Retorne no console apenas as imagens que começaram com a palavra imagem

const images2 = document.querySelectorAll('img[src^="assets/imagem"]')
console.log(images2)
// o atributo do elemento vai entre os colchetes;
// Para selecionar os que COMECAM, usamos o ^ e passamos aquilo que queremos que começe com

//3- Selecione todos os links internos (onde o href começa com #)

const linksInternos = document.querySelectorAll('a[href^="#"]')
console.log(linksInternos)

//4- Selecione o primeiro h2 dentro de .animais-descricao

const firstH2 = document.querySelector('.animais-descricao h2')
console.log(firstH2.innerText)

//5- Selecione o último p do site

const ultimoP = document.querySelectorAll('p')  //retorna um array-like: nodeCollection
// Então, iremos procurar o último parágrafo no array-like "ultimoP" no último índice, o índice de número 25, onde se encontra o último p.[
console.log(ultimoP) // Array-like com todos os parágrafos do site
console.log(ultimoP.length) //Tamanho desse array-like. Temos 25 parágrafos no site
console.log(ultimoP[ultimoP.length-1].innerText) // Estamos procurando o texto do elemeno de último índice do array-like 'ultimoP'.


// nodeCollection: estático e possui métodos diferentes do HTML Collection, como o forEach

//HTMLCollection: dinâmico e possui métodos diferentes do nodeCollection-  o forEach não pode ser usado com o HTML Collection.