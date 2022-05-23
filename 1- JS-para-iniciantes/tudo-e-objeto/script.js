//1- nomeie 3 propriedades ou métodos de strings

let nome = 'Clara';

// method chartAt = Returns the character at the specified index;
nome.charAt(1);

//property string = Returns the length of a String object;
console.log(nome.length);

// method replace = Replaces text in a string, using a regular expression or search string.
// @param searchValue — A string to search for.
// @param replaceValue — A string containing the text to replace for every successful match of searchValue in this string.
nome.replace('C','K');


//2- nomeie 5 propriedades ou métodos de elementos do DOM

//Property URL: Sets or gets the URL for the current document.
document.URL

//Method addEventListener: Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

document.addEventListener('click', function(){
  return true;
})

//Property firstchild: Returns the first child
document.firstChild

//Method getElementById: Returns a reference to the first object with the specified value of the ID attribute.

// @param elementId — String that specifies the ID value.
document.getElementById()

//Property onChange: Fires when the contents of the object or selection have changed.

// @param ev — The event.
document.onchange()

//3- busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

// Copiar texto para a área de transferência usando o método Document.execCommand() em JavaScript
