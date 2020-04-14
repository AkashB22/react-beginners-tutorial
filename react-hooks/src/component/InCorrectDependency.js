import React, {useState, useEffect} from 'react'

function InCorrectDependency() {
    let [count, setCount] = useState(0);
    const tick = ()=>{
        console.log('run interval');
        setCount(count+1);
    }
    useEffect(()=>{
        let timer = setTimeout(tick , 1000)
        console.log('run');
        return(()=>{
            clearInterval(timer);
        })
    }, [count])
    return (
        <div>
            {count}
        </div>
    )
}

export default InCorrectDependency
