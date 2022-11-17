import { conectaApi } from "./controller.js";


const formulario = document.querySelector(".enviarDados")



async function cadastroJogador(evento) {
    evento.preventDefault()


    const Jogador = document.querySelector(".Jogador02").value
    const gols= document.querySelector(".gols02").value
   

    await conectaApi.criaJogador(Jogador, gols);
    window.location.href = "index.html";
}

formulario.addEventListener('click', evento => cadastroJogador(evento))





