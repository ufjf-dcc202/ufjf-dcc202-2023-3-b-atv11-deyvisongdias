const pEntrada = document.querySelector("#entrada");
const btnAdicioanar = document.querySelector("#adicioanar");
const btnlimpar = document.querySelector("#limpar");
const olItens = document.querySelector("#itens");

adicionaElemetoNaLista();
adicionaElemetoNaLista();
adicionaElemetoNaLista();


function dicionaElemetoNaLista(texto){
    const li = document.createElement("li");
    li.textContent = "Primeiro";
    olItens.appendChild(li);
}
