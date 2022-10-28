import { conectaApi } from "./controller.js";

const lista = document.querySelector(".tabelaDados");

function constroiJogadores(nome, gols) {
    const jogadores = document.createElement("tr");
    jogadores.className = "tabelaDados";
    jogadores.innerHTML = `<tr>
    <td>${nome}</td>
    <td>${gols}</td>
  </tr>`

    return jogadores;
}

async function listaJogador(elemento) {
    const listaApi = await conectaApi.listaJogadores();
    listaApi.forEach(elemento => lista.appendChild( constroiJogadores(elemento.nome, elemento.gols,)))
}

listaJogador();