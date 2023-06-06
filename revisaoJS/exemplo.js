const leia = require("prompt-sync")()

let valor1 = 0
let valor2 = 0

let nome = leia("Digite seu nome : ")

valor1 = parseInt(leia("Digite o valor 1 : "))
valor2 = parseInt(leia("Digite o valor 2 : "))

console.log("Oi "+nome.toUpperCase()+" a soma é = "+(valor1+valor2))
console.log(nome.length)