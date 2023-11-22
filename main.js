const pEntrada = document.querySelector("#entrada");
const btnAdicioanar = document.querySelector("#adicioanar");
const btnlimpar = document.querySelector("#limpar");
const olItens = document.querySelector("#itens");

const li = document.createElement("li");
li.textContent = "Primeiro";
console.log(li);
olItens.append(li);
