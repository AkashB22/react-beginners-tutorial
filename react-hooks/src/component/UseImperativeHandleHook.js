import React, {useImperativeHandle, useRef} from 'react'

function UseImperativeHandleHook(props, ref) {
    let inputChildRef = useRef();
    useImperativeHandle(ref, ()=>({
        focusCustom : ()=>{
            inputChildRef.current.focus();
        }
    }))
    return (
        <div>
            <input type="text" ref={inputChildRef} />
        </div>
    )
}

export default React.forwardRef(UseImperativeHandleHook)
