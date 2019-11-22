import React, {useState, useEffect} from 'react'

function useEffectHookOne() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    const increment = ()=>{
        setCount((prevCount) =>{
            return prevCount + 1;
        })
    }

    useEffect(() => {
        console.log('running document update by effect')
        document.title = `Clicks done : ${count}`
    },[count])


    return (
        <div>
            <input tpe='text' value={name} onChange={(event) =>{
                setName(event.target.value)
            }}/>
            <button onClick={increment}>clicks Done : {count}</button>
        </div>
    )
}

export default useEffectHookOne
