import {useState} from 'react'

function useCounter(initialCount=0, value=1) {
    let [count, setCount] = useState(initialCount);

    let increment = ()=>{
        setCount(prevCount=> prevCount + value);
    }

    let decrement = ()=>{
        setCount(prevCount=> prevCount - value);
    }

    let reset = ()=>{
        setCount(initialCount)
    }

    return [count, increment, decrement, reset];
}

export default useCounter
