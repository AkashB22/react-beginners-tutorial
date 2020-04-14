import React from 'react'
import useCounter from '../hooks/useCounter';

function CounterTwo() {
    let [count, increment, decrement, reset] = useCounter(10, 10)

    return (
        <div>
            Count : {count}
            <button onClick={increment}>increment</button>            
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default CounterTwo
