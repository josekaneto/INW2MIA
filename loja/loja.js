const leia = require("prompt-sync")()

let codigo = [
    'GRP0X-01',
    'GRP0X-02',
    'GRP0X-03',
    'GRP0X-04',
    'GRP0X-05',
    'GRP0X-06',
    'GRP0X-07',
    'GRP0X-08',
    'GRP0X-09',
    'GRP0X-10'
]

let produto = [
    'BONÉ              ',
    'CALÇA             ',
    'BERMUDA AFRO      ',
    'BATA              ',
    'CAMISA AFRO       ',
    'SAIA RODADA       ',
    'SAIA STYLE        ',
    'MACACÃO           ',
    'CAMISETA TEMATICA ',
    'CALÇA SOCIAL AFRO'
]

let valor = [
    100.00,
    150.00,
    90.00,
    140.00,
    150.00,
    90.00,
    90.00,
    150.00,
    100.00,
    95.50 
]

let estoque = [10,10,10,10,10,10,10,10,10,10]
let carrinho = [0,0,0,0,0,0,0,0,0,0]
let opcao
let auxCodigo


do{
    console.log("Lojásso do Kaneto")
    console.log("A melhor e única no mundo")
    console.log("\n")

    

    console.log("COD\t\tDESCRICAO\t\tVALOR\tESTOQUE")
    for (let i = 0; i < codigo.length; i++) {
        console.log(codigo[i]+"\t"+produto[i]+"\t"+valor[i]+"\t"+estoque[i])
    }

    opcao = leia("Deseja fazer compras ?  Digite S para sim ou N para não : ").toUpperCase()

    console.log("COMPRAS")

    while(true){
        
        auxCodigo = leia("Digite o código do produto que deseja comprar : ").toUpperCase()

        for (let i = 0; i < codigo.length; i++) {
            if(auxCodigo == codigo[i]){
                console.log(codigo[i]+"\t"+produto[i]+"\t"+valor[i]+"\t"+estoque[i])
                carrinho[i] = parseInt(leia("Digite o a quantidade que deseja comprar : "))
                console.log("Sub-total "+(valor[i]*carrinho[i]))
            }
        }

        console.log("CARRINHO DE COMPRAS")

        console.log("COD\t\tDESCRICAO\t\tVALOR\tESTOQUE\tQTDE COMPRADA")
        for (let i = 0; i < codigo.length; i++) {
            if(carrinho[i]>0){
                console.log(codigo[i]+"\t"+produto[i]+"\t"+valor[i]+"\t"+estoque[i]+"\t"+carrinho[i])
            }    
        }
        let continua = leia("Continuar comprando S/N : ").toUpperCase()

        if(continua == "N"){
            break
        }
    }

    opcao = leia("Deseja fazer compras ?  Digite S para sim ou N para não : ").toUpperCase()

    

}while(opcao != "N"){
    console.log("Até Breve!!!")
}
