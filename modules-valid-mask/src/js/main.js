import { masks } from '../modules/mask.js'
import { validations } from '../modules/validate.js'


document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js
    const id = $input.id

    if(field){
        $input.addEventListener('input', (e) => 
    {
        e.target.value = masks[field](e.target.value)
    }, false)
    }

    $input.addEventListener('focusout', (e) => {
        if(validations[id](e.target.value)){
            $input.classList.add('errorInput')
        } else {
            $input.classList.remove('errorInput')
        }
    }, false)

})