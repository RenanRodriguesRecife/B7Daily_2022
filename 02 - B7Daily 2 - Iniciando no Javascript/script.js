let name = "renan"
let numero1 = 10
let numero2 = 30
var teste = "nome"
const idade = 90


let total = numero1 + numero2


let n1 = 10
let n2 = 5;
let soma = n1 + n2;
console.log(soma)
let subtrair = n1 - n2;
console.log(subtrair)
let multiplicar = n1 * n2;
console.log(multiplicar)
let dividir = n1 / n2;
console.log(dividir)

console.log("O total foi : "+ total);

if (total > 50){
    console.log("total foi maior que 50")
}else{
    console.log("total foi menor que 50")
}

//Array
let ingredientes = [
    'fdskla',
    "fjdkslaç",
    "jfdkslafjkas",
    "dfsa",
    "fjdkslafçd",
    total
]

console.log(ingredientes)

for(let i = 0; i < 10; i++){
    console.log("Executou!")
}

for(let i = 0; i < ingredientes.length; i++){
    console.log(ingredientes[i])
}


// Manipuando o DOM
// document -> é a página html 
// window -> é toda a janela do natagador {barra de endereços...} incluindo a página html

document.getElementById('titulo').innerHTML = "titulo alterado"
document.getElementsByClassName('Titulo')[0].innerHTML = "alguma coisa"
let ul = document.querySelector('ul')
console.log(document.querySelectorAll('li'))


for(let i = 0; i < ingredientes.length; i++)
{
    let liHtml = '<li>' + ingredientes[i] + '</li>';
    
     ul.innerHTML += liHtml;
}
