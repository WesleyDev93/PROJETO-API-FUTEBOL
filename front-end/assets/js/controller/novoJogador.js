import { conectaApi } from "./controller.js";


const formulario = document.querySelector(".formulario")



async function criarJogador(evento) {
    evento.preventDefault()

    const Jogador = document.querySelector(".Jogador").value
    const gols= document.querySelector(".gols").value
   

    await conectaApi.criaJogagor(Jogador, gols);
    window.location.href = "index.html";
}

formulario.addEventListener("submit", evento => criarJogador(evento))

