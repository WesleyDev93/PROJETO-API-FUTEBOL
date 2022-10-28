import { conectaApi } from "./controller.js";

const lista = document.querySelector(".tabelaDados");

function constroiJogadores(jogador, gols) {
    const jogadores = document.createElement("tr");
    jogadores.className = "tabelaDados";
    jogadores.innerHTML = `<tr>
    <td>${jogador}</td>
    <td>${gols}</td>
  </tr>`

    return jogadores;
}

async function listaJogador() {
    const listaApi = await conectaApi.listaJogadores();
    listaApi.forEach(elemento => lista.appendChild( constroiJogadores(elemento.jogador, elemento.gols,)))
}

listaJogador();