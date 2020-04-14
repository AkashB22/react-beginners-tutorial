import React, {useState, useEffect, useRef} from 'react'

function UseRefAsClassProperty() {
    let [time, setTime] = useState(0);
    let intervalRef = useRef();

    useEffect(()=>{
        intervalRef.current = setInterval(()=>{
            setTime(time + 1);
        }, 1000);

        return ()=>{
        clearInterval(intervalRef.current);
        }
    });

    
    return (
        <div>
            timer: {time}
            <button  onClick={()=>clearInterval(intervalRef.current)} > stop timer </button>
        </div>
    )
}

export default UseRefAsClassProperty
