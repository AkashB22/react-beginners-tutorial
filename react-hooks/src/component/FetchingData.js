import React, {useState, useEffect} from 'react';
import axios from 'axios';

function FetchingData() {
    let [loading, setLoading] = useState(true);
    let [data, setData] = useState({});
    let [error, setError] = useState('');

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then((response)=>{
                setLoading(false);
                setError('');
                setData(response.data);
                console.log(response.data);
            })
            .catch((error)=>{
                setLoading(false);
                setData({});
                setError('Something went wrong');
            })
    }, [])
    
    return (
        <div>
            {loading ? 'Loading...' : data.title}
            {error ? error : null}
        </div>
    )
}

export default FetchingData
