const leia = require("prompt-sync")()

let aluno1
let nota1
let nota2
let aluno2

aluno1 = leia("Nome do aluno 1 : ")
nota1 = parseInt(leia("nota do aluno 1 : "))
aluno2 = leia("Nome do aluno 2 : ")
nota2 = parseInt(leia("nota do aluno 2 : "))

if(nota1 >= 5){
    console.log("OI "+aluno1+" aprovado")
}
else{
    console.log("OI "+aluno1+" reprovado")
}

if(nota2 >= 5){
    console.log("OI "+aluno2+" aprovado")
}
else{
    console.log("OI "+aluno2+" reprovado")
}