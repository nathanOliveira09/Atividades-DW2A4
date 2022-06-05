export const mask = {
    cep(valor){
        return valor
        .replace(/\D/g,'')
        .replace(/(\d{5})(\d{1})/, '$1-$2')
        //    \d+?$ Significa "Quantos números encontrar depois da primeira condição (-\d{3}) até o final da String"
        .replace(/(-\d{3})\d+?$/,'$1')
    }
}

