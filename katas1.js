function cubo10() {
    let str = '';
    for (let i = 1; i <= 10; i++) {
        str += (i ** 3) + '\n';
    }
    return str;
}

console.log(cubo10());
// ----------------------------------- //
function divisiveisPor(limite, divisor) {
    let str = ''
    for (let i = 1; i <= limite; i++) {
        if(i % divisor === 0) {
            str += i + '\n'
        }
    }
    return str
}

console.log(divisiveisPor(100, 10))

// ----------------------------------- //

function posicaoLetra(palavra, numero) {
   while(numero < palavra.length) {
    return palavra[numero]
   }
    return console.log("Letra não encontrada");
}

console.log(posicaoLetra("algorítmos", 7)); 

// ----------------------------------- //
let palavraNova = ''
 function palavraRecortada(palavra, numero) {
    for(let i = 0; i < numero; i++) {
        palavraNova += palavra[i]
    }
    return palavraNova
}
console.log(palavraRecortada("Algoritimos", 4));
 
// ----------------------------------- //

let resto = ''
function palavraResto(palavra, numero) {
    for(let i = numero; i < palavra.length; i++) {
        resto += palavra[i]
    }
    return resto
}
console.log(palavraResto("Algoritimos", 2) );

// ----------------------------------- //

let vowelCount = 0;
function contaVogais (palavra) {
    for(let i = 0; i < palavra.length; i++) {
        if(palavra[i] === 'a' ||  palavra[i] === 'e' || palavra[i] === 'i' || palavra[i] === 'o' || palavra[i] === 'u') {
            vowelCount++
        }
    }
    return vowelCount
}
console.log(contaVogais('abacaxi')); 

// ----------------------------------- //

function textoDeTrasParaFrente (texto) {
    let reverse = '';
    for(let i = texto.length -1; i >= 0; i--) {
        reverse += texto[i]
    }
    return reverse;
}
console.log(textoDeTrasParaFrente('abacaxi')); 
 
// ----------------------------------- //
let str = '';
function removeEspacos(texto){
    for(let i = 0; i < texto.length; i++) {
        if (texto[i] !== ' ') {
            str += texto[i]
        }  
    }
    return str
}
console.log(removeEspacos("Não restará   espaços em branco"));

//-------------------------------------//

function textoCriptografado(texto) {
    let word = '';
    for(let i = 0; i < texto.length; i++) {
        const textoLowerCase = texto.toLowerCase()
        if(textoLowerCase[i] === 'a') {
            word += 'x'
        } else if(textoLowerCase[i] === 'e') {
            word += 'y'
        }else if(textoLowerCase[i] === 'i') {
            word += 'w'
        } else if(textoLowerCase[i] === 'o') {
            word += 'k'
        } else if(textoLowerCase[i] === 'u') {
            word += 'z'
        } else {
            word += textoLowerCase[i];
        }
    }
    return word[0].toUpperCase() + word.slice(1) // só para deixar a primeria letra maíuscula
}

console.log(textoCriptografado("Uma frase ultra secreta que precisa ser criptografada"))

// ----------------------------------- //


