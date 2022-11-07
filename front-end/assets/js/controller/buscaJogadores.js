import { conectaApi } from "./controller.js";
import constroiJogadores from "../controller/mostraDados.js";




async function buscaJogadores (evento) {
     evento.preventDefault ()
     
    const dadosDaPesquisa = document.querySelector ("[data-pesquisa]").value

    const busca = await conectaApi.buscaJogadores ()


    const tabela = document.querySelector ("tabelaDados01")

    console.log (busca)

    busca.forEach(elemento => tabela.appendChild (constroiJogadores (elemento.Jogador, elemento.gols,elemento.id)));

}
const botaoPesquisa = document.querySelector ("[data-botao-pesquisa]")



botaoPesquisa.addEventListener ("click", evento => buscaJogadores (evento))


