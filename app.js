import Usuario from "./Usuario.js"
const botao = document.getElementById("botao")
const usuario = document.getElementById("usuario")
const senha = document.getElementById("senha")

const admin = new Usuario("admin", "admin@devinhouse.com", "admin")

botao.addEventListener("click", () => {
  admin.autenticar(usuario.value, senha.value) ? 
    alert("Login realizado") :
    alert("Falha no login") 
})