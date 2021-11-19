const form = document.querySelector("#in");
const ul = document.querySelector("#myUl");
const btn = document.querySelector("#btn");
let url =
  "http://api.exchangeratesapi.io/v1/latest?access_key=bcccf5861c816f95a8698ab149ab7293&rates=";

btn.addEventListener("click", e => {
  fetch(url)
    .then(resp => resp.json())
    .then(data => {
      let valor = form.value;
      let li = document.createElement("li");
      li.innerHTML = `Valor em euro: ${valor}, valor em real: ${
        data.rates.BRL * valor
      }`;
      ul.appendChild(li);
    })
    .catch(error => {
      console.log("Opss! " + error);
    });
});
