
async function listaJogadores() {


    const conexao = await fetch("http://localhost:3000/jogadores");
    const conexaoConvertida = await conexao.json();

    
    console.log (conexaoConvertida)
    

    return conexaoConvertida;
}

//listaVideos ()


async function criaJogador (Jogador, gols, id) {
    
    const conexao = await fetch ("http://localhost:3000/jogadores",{
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify ({
            Jogador:Jogador,
            gols:gols,
            id:id
            
        })
    })

    const conexaoConvertida = await conexao.json ()
    return conexaoConvertida
}


const removeJogador= (id) => { 
    return fetch(`http://localhost:3000/jogadores/${id}`, {
        method: 'DELETE'
    })
    .then( resposta => { 
        if(!resposta.ok){
        throw new Error('Não foi possível deletar um cliente')
        }
    })
}



export const conectaApi = {

     listaJogadores,
     criaJogador,
     removeJogador
     

     
    
}