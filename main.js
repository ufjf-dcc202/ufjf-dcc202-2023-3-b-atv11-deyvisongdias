import { adicionaNaLista, getLista, limpaLista } from "./src/lista.js";

const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");
const olnItens = document.querySelector("#itens");

atualizarListaOrdenada();
btnAdicionar.addEventListener('click', adicionaItemEntrada);

btnLimpar.addEventListener('click', limparListaOrdenada)

function limparListaOrdenada(){
    limpaLista();
    atualizarListaOrdenada();
}

function adicionaItemEntrada(){
    const valor = pEntrada.textContent;
    adicionaNaLista(valor);
    pEntrada.textContent = "";
    atualizarListaOrdenada();
}

function atualizarListaOrdenada(){
    const Lista = getLista();
    olnItens.innerHTML = "";
    for(let i=0; i<Lista.length; i++){
        adicionaElementoNaListaOrdenada(Lista[i]);
    }
}

function adicionaElementoNaListaOrdenada(texto){
    const li = document.createElement("li");
    li.textContent = texto;
    olnItens.appendChild(li);
}


