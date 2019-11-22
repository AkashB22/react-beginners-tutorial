import React, {useState} from 'react'

function HookCounterWithPrevValue() {
    let initial = 0;
    let [count, setCount] = useState(initial)
    let incrementHandler = ()=>{
        setCount(count + 1)
    }
    let decrementHandler = ()=>{
        setCount(count-1);
    }
    let resetHandler = ()=>{
        setCount(initial)
    }
    let incrementFiveHandler = ()=>{
        for(let i=0; i<5;i++){
            //console.log(count);
            setCount(prevValue => { console.log(prevValue) 
                return prevValue + 1
            })
        }
    }
    return (
        <div>
            CLICK count: {count}
            <button onClick={incrementHandler}> incrementHandler</button>
            
            <button onClick={decrementHandler}>decrementHandler</button>
            
            <button onClick={resetHandler}>reset</button>

            <button onClick={incrementFiveHandler}> incrementFiveHandler</button>
        </div>
    )
}

export default HookCounterWithPrevValue
