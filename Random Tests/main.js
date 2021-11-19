const ul = document.querySelector('#myUl')
const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
  .then(resp => resp.json())
  .then(data => {
    return data.map(user => {
      let li = document.createElement('li')
      li.innerHTML = `Name: ${user.name}, email: ${user.email}`
      ul.appendChild(li)
    })
  })
  .catch(error => {
    console.log('Ops!' + error)
  })
