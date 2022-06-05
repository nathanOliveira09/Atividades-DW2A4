import { mask } from './modules/mask.js';
import { pesquisar } from './modules/findCep.js';
import { findCases }  from './modules/covidResult.js';


    document.querySelector('#cep').addEventListener('input',(element) => {
        element.target.value = mask.cep(element.target.value)
        
        if(element.target.value.length == 9){
            const cep= element.target.value.replace("-","")
            console.log(cep);
            pesquisar(cep)
            //const uf = findCases.returnCases(cep)
            //console.log(pesquisar)
            //const pesquisa = returnCases(uf);

        }

    })
