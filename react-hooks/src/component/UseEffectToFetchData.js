import React, {useState, useEffect} from 'react';
import axios from 'axios';

function UseEffectToFetchData() {
    let [comments, setComments] = useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(res=>{
            console.log(res);
            setComments(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    }, [])

    return (
        <div>
            <ul> 
                {comments.map(comment=>{
                    return (<li key={comment.id}>{comment.name}</li>)
                })}
            </ul>
        </div>
    )
}

export default UseEffectToFetchData
