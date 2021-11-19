// Promise example with fetch and a placeholder JSON

// const ul = document.querySelector("#myUl");
// const url = "https://jsonplaceholder.typicode.com/users";

// fetch(url)
//   .then(resp => resp.json())
//   .then(data => {
//     return data.map(user => {
//       let li = document.createElement("li");
//       li.innerHTML = `Name: ${user.name}, email: ${user.email}`;
//       ul.appendChild(li);
//     });
//   })
//   .catch(error => {
//     console.log("Ops!" + error);
//   });

// creating my versions of Filter, Map and Reduce

function createCar(nome, marca, ano) {
  return { nome, marca, ano };
}

let carros = [
  createCar("Argo", "Fiat", 2020),
  createCar("Onix", "Chevrolet", 2015),
  createCar("HB20", "Hyundai", 2012),
  createCar("Fox", "Volkswagen", 2010),
];

// função filter

function carroNovo(car) {
  return car.ano >= 2015;
}

function filtro(callback) {
  let filtrados = [];
  for (let carro of carros) {
    if (carroNovo(carro)) {
      filtrados.push(carro);
    }
  }
  return filtrados;
}

console.log(filtro(carros)); // carros2 contém o array filtrado pela condição da função carroNovo -> carros que contém ano >= 2015

//criação do array de objetos para os testes

function criarPessoa(nome, dinheiro) {
  return { nome, dinheiro };
}

let people = [
  criarPessoa("Renato", 10.2),
  criarPessoa("Amanda", 12.7),
  criarPessoa("Alvin", 70.1),
  criarPessoa("Rodrigo", 52.5),
];

// função fakeMap

function howManyDol(people) {
  return `${people.nome} tem ${people.dinheiro} dólares`;
}

function printString(callback) {
  let strings = [];
  for (let i of people) {
    strings.push(howManyDol(i));
  }
  return strings;
}

console.log(printString(people));

//função reduce

function allDol(people) {
  return people.dinheiro;
}

function fakeReduce(callback) {
  let total = 0;
  for (let i of people) {
    total += allDol(i);
  }
  return total;
}

console.log("O total de dolares é: " + fakeReduce(people));
