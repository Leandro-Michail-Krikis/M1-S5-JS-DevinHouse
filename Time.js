export default class Time {
  nome;
  sigla;
  vitorias;
  derrotas;
  empates;
  golsMarcados;
  golsSofridos;

  constructor(sigla) {
	this.sigla = sigla
	this.vitorias = 0
	this.derrotas = 0
	this.empates = 0
  }

  get numeroDeJogos() {
    return (
      parseInt(this.vitorias) + parseInt(this.derrotas) + parseInt(this.empates)
    );
  }

  get numeroDePontos() {
    return parseInt(this.vitorias) * 3 + parseInt(this.empates);
  }

  get exibirSituacao() {
    return this
  }

  computarPartida({ siglaTimeA, golsTimeA, siglaTimeB, golsTimeB }) {
	let golsMarcados = 0
    let golsSofridos = 0

    if (siglaTimeA == this.sigla) {
      golsMarcados = golsTimeA
      golsSofridos = golsTimeB
    } else if (siglaTimeB == this.sigla) {
      golsMarcados = golsTimeB
      golsSofridos = golsTimeA
    } else {
      return // interrompe a execução
    }

    if (golsMarcados > golsSofridos) {
      this.vitorias++
    } else if (golsMarcados < golsSofridos) {
      this.derrotas++
    } else {
      this.empates++
    }

    this.golsMarcados += golsMarcados
    this.golsSofridos += golsSofridos
  }
}
