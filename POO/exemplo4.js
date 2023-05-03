class Aviao{
    constructor(ligado, velocidade, velocidadeMaxima, passageiros, companhia, cor){
        this.ligado = ligado
        this.velocidade = velocidade
        this.velocidadeMaxima = velocidadeMaxima
        this.passageiros = passageiros
        this.companhia = companhia
        this.cor = cor
    }

    ligar(){
        this.ligado = true
        console.log("Ligando avião...")
    }

    Acelerando(){
        if(this.ligado && this.velocidade<this.velocidadeMaxima){
            this.velocidade += 10
            console.log("Acelerando..")
            console.log("velocidade atual " + this.velocidade)
        }
   
    }
    Decolando (){
        if(this.velocidade == 200){
            console.log("O aviao esta decolando")
        }
    }
    Cruzeiro(){
        if(this.velocidade >= 300 && this.velocidade < this.velocidadeMaxima){
            console.log("O aviao esta em cruzeiro")
        }
    }
    Desacelerando(){
        if(this.ligado && this.velocidade<=this.velocidadeMaxima){
            this.velocidade -= 10
            console.log("Desacelerando..")
            console.log("velocidade atual " + this.velocidade)
        }
   
    }
    Pousando(){
        if(this.velocidade > 0 && this.velocidade <= 200){
            console.log("O aviao esta pousando")
        }
    }
    Parado(){
        if(this.velocidade == 0){
            console.log("O avião esta parado")
        }
    }
    Desligado(){
        this.velocidade == 0 
        console.log("avião desligado")
    }

}

let aviao1 = new Aviao(false, 0, 800, 450, "Azul", "Azul")
let aviao2 = new Aviao(false, 0, 800, 450, "Azul", "Branca")

console.log(aviao1)
console.log(aviao1.companhia)

aviao1.ligar()

for (let i = 0; i < 80; i++){
    aviao1.Acelerando()
    aviao1.Decolando()
    aviao1.Cruzeiro()
}

for(let i = 0; i < 80; i++){
    aviao1.Desacelerando()
    aviao1.Pousando()
} 

