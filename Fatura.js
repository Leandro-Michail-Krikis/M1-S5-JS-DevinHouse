export default class Fatura {
    id
    descricao
    quantia
    preco
    constructor(id, descricao, quantia, preco){
        this.id = id
        this.descricao = descricao
        this.quantia = quantia > 0 ? quantia : 0 
        this.preco = preco > 0 ? preco : preco
    }

    obterValorTotal () {
        return this.preco * this.quantia
    }

    get getValorTotal() {
        return this.obterValorTotal() 
    }
}