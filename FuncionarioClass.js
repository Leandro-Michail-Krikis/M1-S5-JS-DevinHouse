class FuncionarioClass {
    cpf 
    nomeCompleto
    salario
    constructor(cpf, nomeCompleto, salario) {
        this.cpf = cpf
        this.nomeCompleto = nomeCompleto
        this.salario = salario
    }

    promover (percentual) {
        this.salario += (this.salario * percentual) / 100
    }

}

const testaCPF = (strCPF) => {
    var Soma;
    var Resto;
    Soma = 0;
  
  for (let i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

  Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}

export {FuncionarioClass, testaCPF}