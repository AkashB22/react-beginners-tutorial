import React,{useState, useEffect} from 'react'
import axios from 'axios';

function UseEffectToFetchSingleData() {
    let [post, setPost] = useState({});
    let [id, setId] = useState(1);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res=>{
                console.log(res);
                setPost(res.data);
            })
            .catch(err=>{
                console.log(err);
            })
    }, [id])
    return (
        <div>
            <input type='text' value={id} onChange={(e)=>{setId(e.target.value)}}/>
            <div>{post.title}</div>
        </div>
    )
}

export default UseEffectToFetchSingleData
