import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             login : true
        }
    }
    
    render() {
        // let msg;
        // if(!this.state.login){
        //     msg = (
        //         <div>
        //             <div>Hello User</div>
        //         </div>
        //     )
        // } else{
        //     msg =  (
        //         <div>
        //             <div>Hello Guest</div>
        //         </div>
        //     )
        // }
        return this.state.loggin && <div>Hello User</div>;
        // return (
        //     <div>
        //         <div>Hello User</div>
        //         <div>Hello Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
