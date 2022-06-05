import { findCases } from '../modules/covidResult.js'
export async function pesquisar(cep){   
    
    const url = `https://viacep.com.br/ws/${cep}/json`;

    await fetch(url).then(function(response){
        response.json().then(function (data) {
            if(data.hasOwnProperty('erro')){
                alert("Endereço não encontrado ou CEP inválido.")
            }else{
                
                document.getElementById("resultEstado").innerHTML = `<h5>Estado: </h5> ${data.uf}`;
                findCases(data.uf)     
            }
        })
    });

    
}