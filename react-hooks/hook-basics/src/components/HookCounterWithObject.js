import React, {useState} from 'react'

function HookCounterWithObject() {
    let [name, setName] = useState({firstName:'', lastName: ''});
    return (
        <div>
            <input type='text'value={name.firstName} onChange={(event)=>{
                setName({...name,
                    firstName : event.target.value
                })
            }} />
            <input type='text' value={name.lastName} onChange={(event)=> {
                setName({...name,lastName : event.target.value})
            } }/>
            <p>
                FirstName : {name.firstName}
                LastName : {name.lastName}
            </p>
        </div>
    )
}

export default HookCounterWithObject
