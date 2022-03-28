import { useState } from "react";

const useForm = (type) =>{
    const[value,setValue] = useState('')
    const [error,setError] = useState(null)
    
    const types = {
        email:{
            regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Preencha um email válido'
        }
    }

    function validate(value){
        if(type === false) return true 

        if(value.length === 0){
            setError('Preencha um valor.')
            return false
        }

        if(types[type] && !types[type].regex.test(value)){
            console.log('entrei')
            setError(types[type].message)
            return false
        }

        setError(null)
        return true
    }

    function onChange({target}){
        if(error != null) validate(target.value)
        setValue(target.value)
    }

    return {
        value,
        setValue,
        onChange,
        validate:()=>validate(value),
        onBlur:()=>validate(value),
        error
    }
}

export default useForm