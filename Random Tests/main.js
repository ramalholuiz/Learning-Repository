const funcao1 = funcao2 => {
  const x = Math.floor(Math.random() * 10)
  funcao2(x)
}

funcao1(x => {
  console.log(x)
})

function aluno(nome, idade) {
  ;(this.nome = nome), (this.idade = idade)
}

const aluno1 = new aluno('Renato', 29)
const aluno2 = new aluno('Alvin', 40)

console.log(aluno1, aluno2)
