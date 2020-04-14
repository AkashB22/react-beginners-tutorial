import React,{useState, useMemo} from 'react'

function useMemoHook() {
    let [count1, setCount1] = useState(0);
    let [count2, setCount2] = useState(0);

    let increment1 = ()=>{
        return setCount1(count1+1);
    }

    let increment2 = ()=>{
        return setCount2(count2+1);
    }

    let isEven = useMemo(()=>{
        for(let i=0; i< 2000000000; i++){}
        return (count1 % 2 === 0);
    }, [count1]);

    return (
        <div>
            <button onClick={increment1}>count1: {count1} </button>
            <span>{isEven ? ' even ' : ' odd '}</span>
            <button onClick={increment2}>count2: {count2} </button>
        </div>
    )
}

export default useMemoHook
