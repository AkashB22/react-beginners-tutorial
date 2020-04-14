import {useEffect} from 'react'

function useDocumentTitle(count) {
    useEffect(()=>{
        document.title = count + ' Count';
    }, [count]);
}

export default useDocumentTitle
