import { conectaApi } from "./controller.js";
import constroiJogadores from "../controller/mostraDados.js";




async function buscaJogador (evento) {
    evento.preventDefault ()
    
   const dadosDaPesquisa = document.querySelector ("[data-pesquisa]").value

   const busca = await conectaApi.buscaJogadores ()


   const tabela = document.querySelector (".tabelaDados01")

   console.log (dadosDaPesquisa)
   console.log (evento)
   console.log (busca)
   console.log (tabela)


   busca.forEach(elemento => tabela.appendChild (constroiJogadores (elemento.Jogador, elemento.gols,elemento.id)));


    if (dadosDaPesquisa) {
        
        tabela.style.color = 'red';
    }

}
const botaoPesquisa = document.querySelector ("[data-botao-pesquisa]")



botaoPesquisa.addEventListener ("click", evento => buscaJogador (evento))