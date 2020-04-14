import React, { Component } from 'react'
import {UserConsumer} from './UserContext';

export class CompF extends Component {
    render() {
        return (
            <div>
                <UserConsumer>
                    {
                        (username) =>{
                            return (<h1> Hello {username} </h1>)
                        }
                    }
                </UserConsumer>
                Hello user
            </div>
        )
    }
}

export default CompF
