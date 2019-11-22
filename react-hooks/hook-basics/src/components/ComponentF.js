import React from 'react'
import {UserContext, ChannelContext} from '../App'

function ComponentF() {
    return (
        <div>
            Component F

            <UserContext.Consumer>
                {
                    user =>{
                        return (
                            <ChannelContext.Consumer>
                                {
                                    channel =>{
                                        return (
                                            <div>
                                                User Context Value is {user} and Channel Context value is {channel}
                                            </div>
                                        )
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF
