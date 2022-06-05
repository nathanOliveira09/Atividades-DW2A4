export const validations = {
    cpf (numCPF) {
        return numCPF
        let soma = 0;
        let resto = 0;

        let strCPF = String(numCPF).replace(/[^\d]/g, '')

        if (strCPF.length !== 11)
        return false

        for (i=1; i<=9; i++){
            soma = soma + parseInt(strCPF.substring(i-1, i)) * (11-i)
            resto = (soma * 10) % 11
        }

        if ((resto == 10) || (resto == 11))
        resto = 0

        if (resto != parseInt(strCPF.substring(9, 10)) )
        console.log("Erro")
        return false;
        
        soma = 0

        for (i = 1; i <= 10; i++)
        soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i)

        Resto = (Soma * 10) % 11

        if ((resto == 10) || (resto == 11))
        resto = 0

        if (resto != parseInt(strCPF.substring(10, 11)) )
        console.log("Erro")
        return false;

        return true
     },

    dt_nasc (dataNasc){
        let dataAtual = new Date()

        let matches = /^(\d{2})[-\/](\d{2})[-\/](\d{4})$/.exec(dataNasc);
        if (matches == null) return true;
        let d = matches[1];
        let m = matches[2];
        let y = matches[3];
        if (d > 31 ||
            d < 0 ||
            m > 12 ||
            m < 0) {
            return true;
        }

        let data = new Date(y, m, d);
        
        if (data > dataAtual){
            return true
        }
    },

    email (emailUsuario){
        if(!/\w@\w/.test(emailUsuario)) {
            return true
        }
    },

    fone (value){
        const telefone = String(value).replace(/[^\d]/g, '')
        if(telefone.length < 11){return false}
    },


}