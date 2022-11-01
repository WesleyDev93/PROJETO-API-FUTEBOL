import { conectaApi } from "./controller.js";

const lista = document.querySelector(".tabelaDados");

function constroiJogadores(Jogador, gols) {
    const Jogadores = document.createElement("tr");
    Jogadores.className = "tabelaDados";
    Jogadores.innerHTML = `<tr>
    <td>${Jogador}</td>
    <td>${gols}</td>
  </tr>`

    return Jogadores;
}

async function listaJogador() {
    const listaApi = await conectaApi.listaJogadores();
    listaApi.forEach(elemento => lista.appendChild( constroiJogadores(elemento.Jogador, elemento.gols,)))
}

listaJogador();