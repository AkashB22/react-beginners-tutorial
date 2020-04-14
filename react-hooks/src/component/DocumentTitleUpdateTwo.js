import React, {useState} from 'react'
import useDocumentTitle from './../hooks/useDocumentTitle';

function DocumentTitleUpdateTwo() {
    let [count, setCount] = useState(1);

    useDocumentTitle(count);
    
    return (    
        <div>
            <button onClick={()=> setCount(count + 1)}>Count: {count}</button>        
        </div>
    )
}

export default DocumentTitleUpdateTwo
