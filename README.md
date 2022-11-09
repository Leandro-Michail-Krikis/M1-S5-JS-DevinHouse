# M1-S5-JS-DevinHouse
# Classes, Atributos, Encapsulamento (closure), Herança, Polimorfismo e Módulos (export e import) 

Em três arquivos (`index.html`, `app.js`, `CalculadoraDeArea.js`) resolva o seguinte exercício:

Inclua o arquivo `app.js` em `index.html` como `type="module"`.

Em `CalculadoraDeArea.js`, crie uma classe **CalculadoraDeArea** que tenha os atributos `tipo` (_string_), `base` (_number_) e `altura` (_number_).

Implemente o método `calcular()` que faça o cálculo da área conforme o `tipo` do polígono informado:

- "triangulo":  `(base * altura) / 2`
- "quadrado" e "retangulo" : `base * altura`

Importe a classe `CalculadoraDeArea` em `app.js` e teste a implementação com instâncias dessa classe para um triângulo de base 6 cm e altura 8 cm, para um quadrado de base e altura de 4 cm e um retângulo de base 4 cm e altura 6 cm.

Imprima o resultado calculado no console.

Exemplos:

```
const quadA = new CalculadoraDeArea("quadrado", 6, 6);
const areaQA = quadA.calcular();
console.log(areaQA); // 36

const triangB = new CalculadoraDeArea("triangulo", 8, 7);
const areaTB = triangB.calcular();
console.log(areaTB); // 28
```