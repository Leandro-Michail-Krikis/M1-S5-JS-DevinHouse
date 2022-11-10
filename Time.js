export default class Time {
    nome
    sigla
    vitorias
    derrotas
    empates
    golsMarcados
    golsSofridos

    constructor(){

    }

    get numeroDeJogos () {
        return parseInt(this.vitorias) + parseInt(this.derrotas) + parseInt(this.empates)
    }

    get numeroDePontos () {
        return parseInt(this.vitorias) * 3 + parseInt(this.empates)
    }

    computarPartida ({siglaTimeA, golsTimeA, siglaTimeB, golsTimeB}) {

    }

    get exibirSituacao () {
        console.log(`${this.nome} \n ${this.sigla} \n`)
    }
}
