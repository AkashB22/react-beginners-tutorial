import React,{useState,useEffect} from 'react'

function EffectRunOnce() {
    let [x, setX] = useState(0);
    let [y, setY] = useState(0);

    let updateXY = (e)=>{
        console.log('Event triggered');
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(()=>{
        console.log('Effect called');
        window.addEventListener('mousemove', updateXY);

        return (()=>{
            console.log('componentDidUnmount');
            window.removeEventListener('mousemove', updateXY);
        })
    }, [])

    return (
        <div>
            <h1>X: {x}, Y: {y}</h1>
        </div>
    )
}

export default EffectRunOnce
