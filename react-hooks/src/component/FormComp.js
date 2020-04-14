import React, {useState} from 'react'
import useInput from '../hooks/useInput';

function FormComp() {
    let [firstName, firstNameBind, firstNameReset] = useInput();
    let [lastName, lastNameBind, lastNameReset] = useInput();

    function submitForm(event){
        event.preventDefault();
        alert(`Hello ${firstName}, ${lastName}`);
        console.log({...firstNameBind});
        firstNameReset();
        lastNameReset();
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <input type="text" {...firstNameBind}/>
                <input type="text" {...lastNameBind}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormComp
