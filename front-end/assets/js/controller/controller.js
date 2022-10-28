async function listaJogadores() {


    const conexao = await fetch("http://localhost:3000/jogadores");
    const conexaoConvertida = await conexao.json();

    
    console.log (conexaoConvertida)
    

    return conexaoConvertida;
}

//listaVideos ()


export const conectaApi = {

     listaJogadores
    
}