
async function listaJogadores() {


    const conexao = await fetch("http://localhost:3000/jogadores");
    const conexaoConvertida = await conexao.json();

    
    console.log (conexaoConvertida)
    

    return conexaoConvertida;
}

//listaVideos ()


async function criaJogador (Jogador, gols) {
    
    const conexao = await fetch ("http://localhost:3000/jogadores",{
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify ({
            jogador:Jogador,
            gols:gols,
            
        })
    })

    const conexaoConvertida = await conexao.JSON ()
    return conexaoConvertida
}







export const conectaApi = {

     listaJogadores,
     criaJogador
     
    
}