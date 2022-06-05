export const masks = {
    cpf (numCPF) {
        return numCPF
        // - \D serve para permitir apenas números. /g serve para fazer isso de maneira global e '' serve para trocar qualquer número por um um caractere vazio.
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1')


    },

    

    date (data) {
            return data
                .replace(/\D/g, '')
                .replace(/(\d{2})(\d)/, '$1/$2')
                .replace(/(\d{2})(\d)/, '$1/$2')
                .replace(/(\d{4})\d+?$/, '$1')
    },

    fone (tel) {
        return tel
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{5})(\d{1,4})/, '$1-$2')
            .replace(/(-\d{4})\d+?$/, '$1')
    },

    cep (cep) {
        return cep
            .replace(/\D/g,'')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{3})\d+?$/, '$1')
    }



}



// document.querySelectorAll('input').forEach(($input) => {
//     const field = $input.dataset.js

//     $input.addEventListener('input', (e) => 
//     {
//         e.target.value = masks[field](e.target.value)
//     }, false)
// })

