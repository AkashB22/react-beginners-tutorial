import {useState} from 'react'

function useInput(initialValue='') {
    let [value, setValue] = useState(initialValue);
    let bind = {
        value,
        onChange: (event)=>{
            setValue(event.target.value);
        }
    }
    let reset = ()=>{
        setValue(initialValue);
    }
    return [value, bind, reset];
}

export default useInput
