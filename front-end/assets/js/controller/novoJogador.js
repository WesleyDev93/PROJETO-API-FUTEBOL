import { conectaApi } from "./controller.js";



const botaoNovoJogador = document.querySelector (".novoJogador")


botaoNovoJogador.addEventListener ('click', ()=> {
    window.location.href = '../novoJogador.html'
})