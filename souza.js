let usuarios = [];

function cadastrar(nome, idade) {
  usuarios.push({ nome, idade });
  console.log("Usuário cadastrado:", nome);
}

cadastrar("caike", 19);
console.log(usuarios);
