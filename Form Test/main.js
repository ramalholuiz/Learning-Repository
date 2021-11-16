function sum() {
  let n1 = parseInt(document.querySelector('#form1').value)
  let n2 = parseInt(document.querySelector('#form2').value)
  let res = document.querySelector('h1')

  res.innerHTML = `O resultado é: ${n1 + n2}`
}
