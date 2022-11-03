import { conectaApi } from "./controller.js";


const formulario = document.querySelector(".formulario")



async function cadastroJogador(evento) {
    evento.preventDefault()


    const Jogador = document.querySelector(".Jogador").value
    const gols= document.querySelector(".gols").value
   

    await conectaApi.criaJogador(Jogador, gols);
    window.location.href = "index.html";
}

formulario.addEventListener("submit", evento => cadastroJogador(evento))

