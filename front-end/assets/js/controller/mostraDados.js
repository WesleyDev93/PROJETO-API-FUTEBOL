import { conectaApi } from "./controller.js";

const lista = document.querySelector(".tabelaDados");

function constroiJogadores(Jogador, gols, id) {
    const Jogadores = document.createElement("tr");
    Jogadores.className = "tabelaDados01";
    Jogadores.innerHTML = `<tr>
    <td>${id}</td>
    <td>${Jogador}</td>
    <td>${gols}</td>
  </tr>
   <button class="excluir" id=${id}>X</button>
  `

    Jogadores.dataset.id = id
    return Jogadores;
}

async function listaJogador() {
    const listaApi = await conectaApi.listaJogadores();
    listaApi.forEach(elemento => lista.appendChild( constroiJogadores(elemento.Jogador, elemento.gols,elemento.id)))
}

listaJogador();

//redirecionar 

const botaoNovoJogador = document.querySelector (".novoJogador")

//console.log (botaoNovoJogador)

botaoNovoJogador.addEventListener ('click', ()=> {
    window.location.href = '../novoJogador.html'
   // console.log ('pagina ok!')
})


