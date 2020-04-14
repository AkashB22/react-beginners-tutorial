import React, { Component } from 'react'
import axios from 'axios';

export class PostFile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             post : [],
             error : ''
        }
    }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response);
                this.setState({
                    post : response.data
                })
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    error : 'Error fetching the data'
                })
            })
        
    }
    render() {
        let data = this.state.post;
        let error = this.state.error;
        console.log(data);
        return (
            <div>
                List of Post
                {
                    data.length > 0  ? 
                    data.map((msg, index)=>{
                        return (index == 0 ?  (<><h1>Data Received</h1><h3 key={msg.id}> {msg.title} </h3></>) :
                         (<h3 key={msg.id}> {msg.title} </h3>))
                    }) 
                    : null
                }

                
                {
                    error ? <><h1> Error on receiving data </h1> <h3>{error}</h3></> : null
                }
            </div>
        )
    }
}

export default PostFile
