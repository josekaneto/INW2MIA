class Animal{
    constructor(tipo, porte, femea, nascimento){
        this.tipo = tipo
        this.porte = porte
        this.femea = femea
        this.nascimento = nascimento
    }

    fazerBarulho(){
        console.log("fazendo barulho...")
    }

    retornaIdade(anoAtual){
        return anoAtual - this.nascimento 
    }
}

class Gato extends Animal{
    constructor(tipo,raca,cor){
        super(tipo)
        this.raca = raca
        this.cor = cor 
    }

    miar(){
        console.log("miauuuuuuuuuuuuu.....")
    }

}

class Cachorro extends Animal{
    constructor(tipo,raca,cor){
        super(tipo)
        this.raca = raca
        this.cor = cor 
    }

    latir(){
        console.log("auauauauauauauauau")
    }

}

// PROGRAMA PRICIPAL

// programa1

let bicho1 = new Animal("mamifero", "medio", false, 2020)

console.log(bicho1)

console.log(bicho1.porte)

bicho1.fazerBarulho()

// programa2

let rocket = new Gato("felino","sphynx", "preto")

rocket.fazerBarulho()
rocket.miar()

// programa3

let groot = new Cachorro("canino","pug","preto")

groot.latir()

// programa4

groot.nascimento = 2021

console.log("O Groot tem "+groot.retornaIdade(2023)+" aninhos")

// programa5

rocket.nascimento = 2021

console.log("O rocket tem "+rocket.retornaIdade(2023)+" aninhos")

// terminado