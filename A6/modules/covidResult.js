export async function findCases(uf){

    const url = `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${uf}`;


    await fetch(url).then(function(response){
        response.json().then(function (results){
            document.getElementById("exibirCasos").innerHTML = `<h5>Casos: </h5>${results.cases}`
            document.getElementById("exibirMortes").innerHTML = `<h5>Mortes: </h5>${results.deaths}`
            document.getElementById("exibirSuspeitas").innerHTML = `<h5>Suspeitas: </h5>${results.suspects}`

            // if(cases.hasOwnProperty('erro')){
            //     alert("Resultados não encontrados para o CEP buscado.")
            // }else{
            //     document.getElementById("exibirCasos").innerHTML = `<h5>Casos: </h5>${results.cases}`
            // }

        })
    })

}



