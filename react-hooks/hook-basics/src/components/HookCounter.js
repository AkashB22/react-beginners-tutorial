import React, {useState} from 'react'

function HookCounter() {
    let inital = 0;
    let [count, setCount] = useState(inital)
    let incrementHandler = ()=>{
        setCount(count + 1)
    }
    return (
        <div>
            <button onClick={incrementHandler}>CLICK ME - count {count}</button>
        </div>
    )
}

export default HookCounter
