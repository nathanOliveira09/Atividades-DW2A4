const mask = {
    cep(valor){
        return valor
        .replace(/\D/g,'')
        .replace(/(\d{5})(\d{1})/, '$1-$2')
        //    \d+?$ Significa "Quantos números encontrar depois da primeira condição (-\d{3}) até o final da String"
        .replace(/(-\d{3})\d+?$/,'$1')
    }
}

const $cep = document.querySelector('[name=cep]')


document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js
    console.log($cep)
    $input.addEventListener('input', (e) => {
        e.target.value = mask.cep(e.target.value)
    },false);
})

function aplicarMascara(){
    const field = $input.dataset.js
    $input.addEventListener('input', (e) => {
        e.target.value = mask.cep(e.target.value)
    },false);
}

function exibir(value1, value2, value3){
    console.log("Rua:" + value3)
    console.log("Bairro:" + value2)
    console.log("Cidade:" + value1)

}

function pesquisar(){
    //Pega o valor do campo no input CEP
    const campoCEP = document.getElementsByName('cep')[0].value;
    //Atribui o valor do CEP a uma constante
    const valor = campoCEP;
    //Imprime o valor para testar se funcionou
    //console.log(valor)
    
    //Acessa a API e pega os resultados retornados em JSON
    fetch(`https://viacep.com.br/ws/${valor}/json/`)
    .then(respostaDoServer => {return respostaDoServer.json()})
    .then(dadosDoCep => {
        //Mapeia e atribui os resultados JSON aos campos
        console.log(dadosDoCep)
        const $cidade = dadosDoCep.localidade
        const $bairro = dadosDoCep.bairro
        const $rua = dadosDoCep.logradouro
        //Chama a função para exibir os campos mapeados
        //exibir($rua,$bairro,$cidade)
    })
    
}
    
// //$campoCEP.addEventListener("blur", infosDoEvento => {
// fetch(`https://viacep.com.br/ws/${pesquisar()}/json/`)
//     .then(respostaDoServer => {return respostaDoServer.json()})
//     .then(dadosDoCep => {
//         console.log(dadosDoCep)
//         const $cidade = dadosDoCep.localidade
//         const $bairro = dadosDoCep.bairro
//         const $rua = dadosDoCep.logradouro
//         exibir($rua,$bairro,$cidade)
//     })
// //})
