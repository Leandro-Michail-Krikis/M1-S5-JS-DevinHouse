# M1-S5-JS-DevinHouse
# Classes, Atributos, Encapsulamento (closure), Herança, Polimorfismo e Módulos (export e import) 

Crie uma pagina HTML de autenticacao baseado no layout em anexo.

Dado a classe __Usuário__ abaixo:

```
class Usuario {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    autenticar(emailInformado, senhaInformada) {
        return (this.email === emailInformado && this.senha === senhaInformada);
    }
}
```

Use esta classe 'Usuário' para implementar a autenticação quando for clicado no botão 'Acessar'.

Dicas:
a) Instancie um usuário indicando seus atributos: nome, email e senha (podem ser dados fixos e indicados no momento da criação do objeto).
b) Colocar no evento relacionado ao botão a chamada para uma função que faça uso do método 'autenticar' deste objeto previamente instanciado.
c) Se a autenticação tiver sucesso (resultado = true), exibir mensagem de sucesso na tela, caso contrário, exibir mensagem de credenciais inválidas.
Sugestão: aplique estilo CSS na página para praticar!