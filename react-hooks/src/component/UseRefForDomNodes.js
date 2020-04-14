import React,{useRef, useEffect} from 'react'

function UseRefForDomNodes() {
    let inputRef = useRef(null);
    useEffect(()=>{
        inputRef.current.focus();
        inputRef.current.value = "hello world";
    }, []);

    return (
        <div>
            <input ref={inputRef} type="text" />        
        </div>
    )
}

export default UseRefForDomNodes
