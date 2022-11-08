import {FuncionarioClass, testaCPF} from "./FuncionarioClass.js";

while(true) {

    const cpf = prompt("Coloque o cpf.")
    const nomeCompleto = prompt("Coloque o nomeCompleto.")
    const salario = parseInt(prompt("Coloque o Salario."))
    
    if (!testaCPF(cpf)) {
        alert("CPF invalido.")
        continue;
    }
    
    const funcionario = new FuncionarioClass(cpf, nomeCompleto, salario)
    
    alert(funcionario.salario)
    
    const aumento = parseInt(prompt("Coloque o aumento."))
    funcionario.promover(aumento)

    alert(funcionario.salario)
}


