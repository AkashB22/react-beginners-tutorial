import React, { Component } from 'react'
import axios from 'axios'

export class PostDataFile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userId : '',
            title : '',
            body : ''
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler =this.onSubmitHandler.bind(this);
    }
    
    onChangeHandler(event){
        let inputFieldName = event.target.name;
        let value = event.target.value;

        this.setState({
            [inputFieldName] : value,
        })
    }

    onSubmitHandler(event){
        event.preventDefault();
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
            .then(res=>console.log('success', res))
            .catch(err=>console.log('Error', err))
    }
    render() {
        let {userId, title, body} = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <p>UserId : <input type='text' name="userId" value={userId} onChange={this.onChangeHandler}/></p>
                    <p>title : <input type='text' name="title" value={title} onChange={this.onChangeHandler}/></p>
                    <p>body : <input type='text' name="body" value={body} onChange={this.onChangeHandler}/></p>
                    <button type='submit'> Submit </button>
                </form>
            </div>
        )
    }
}

export default PostDataFile
