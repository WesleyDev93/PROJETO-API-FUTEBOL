import { conectaApi } from "./controller.js";





const tabela = document.querySelector (".tabelaDados")









tabela.addEventListener('click', async (evento)=> {
    
    let ehBotaoDeDeleta = evento.target.className === 'excluir'
    if(ehBotaoDeDeleta){
        try {
            const linhaJogador = evento.target.closest('.tabelaDados01')
            let id = linhaJogador.dataset.id
            await conectaApi.removeJogador(id)
            linhaJogador.remove()
        }
        catch(erro){
            console.log(erro)
            alert ("erro , por favor tente denovo")
        }
    }
})


