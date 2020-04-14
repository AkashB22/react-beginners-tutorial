import React,{useState, useEffect} from 'react'
import axios from 'axios';

function UseEffectToFetchSingleDataWithButton() {
    let [id, setId] = useState(1);
    let [post, setPost] = useState({});
    let [idFromButtonClick, setIdFromButtonClick] = useState(1);
    const apiCall = ()=>{
        setIdFromButtonClick(id);
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res=>{
                console.log(res);
                setPost(res.data);
            })
            .catch(err=>{
                console.log(err);
            })
    }, [idFromButtonClick])
    return (
        <div>
            <input type='text' value={id} onChange={(e)=>{setId(e.target.value)}} />
            <button onClick={apiCall}>Fetch Call</button>
            <div>{post.title}</div>
        </div>
    )
}

export default UseEffectToFetchSingleDataWithButton
