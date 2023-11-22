import { getLista } from "./src/lista.js";

const pEntrada = document.querySelector("#entrada");
const btnAdicioanar = document.querySelector("#adicioanar");
const btnlimpar = document.querySelector("#limpar");
const olItens = document.querySelector("#itens");

atualizarListaOdenada();
   
function atualizarListaOdenada(){
    const lista = getLista();
    for(let i=0; i<lista.length; i++){
        adicionaElemetoNaListaOrdenada(lista[i]);
    }
}

function adicionaElemetoNaListaOrdenada(texto){
    const li = document.createElement("li");
    li.textContent = texto;
    olItens.appendChild(li);
}
