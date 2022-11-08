export default class Personagem {
    nome
    percentualVida

    constructor(nome) {
        this.nome = nome
        this.percentualVida = 100
    }

    sofreuDano (percentual) {
        this.percentualVida -= percentual
    }
    usouKitMedico () {
        this.percentualVida += 10
    }
}