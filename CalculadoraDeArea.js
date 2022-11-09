export default class CalculadoraDeArea {
    tipo
    base
    altura

    constructor(tipo, base, altura) {
        if(["triangulo", "quadrado", "retangulo"].indexOf(tipo.toLowerCase()) < 0)
            throw tipo + " não e um tipo valido"
        this.tipo = tipo
        this.base = base
        this.altura = altura
    }

    calcular () {
        if(this.tipo.toLowerCase() == "triangulo")
            return (this.base * this.altura) / 2
        return this.base * this.altura
    }
}