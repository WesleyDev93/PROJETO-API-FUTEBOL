import { conectaApi } from "./controller.js";

const lista = document.querySelector("[data-tr]");

function constroiJogadores(nome, gols) {
    const jogadores = document.createElement("tr");
    video.className = "tabelaDados";
    video.innerHTML = `<tr>
    <td>${nome}</td>
    <td>${gols}/td>
  </tr>`

    return video;
}

async function listaJogadores() {
    const listaApi = await conectaApi.listaJogadores();
    listaApi.forEach(elemento => lista.appendChild(
        constroiCard(elemento.nome, elemento.gols,)))
}

listaJogadores();