import Juros from "./Juros.js";

const varA = new Juros(10000, 0.07, 24);
console.log(varA.calcularJurosSimples());
console.log(varA.calcularJurosCompostos());

const varB = new Juros(10000, 0.15, 120)
console.log(varB.calcularJurosSimples());
console.log(varB.calcularJurosCompostos());