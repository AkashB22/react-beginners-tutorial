import React, { useEffect, useState } from 'react';
import { fetchUsers, postUser } from './redux';
import { connect } from 'react-redux';

function UsersContainer({ usersData, fetchUsers, postUser }) {
    let [title, setTitle] = useState('');
    let [userId, setUserId] = useState(0)

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        console.log(usersData);
        setUserId(usersData.users.length);
    }, [usersData])

    const clickHandler = ()=>{
        postUser({"title": title, id :userId});
    }

    return (
        <div>
            <h2>Users Data</h2>
            {(usersData && usersData.loading) ? (<div>Loading</div>) :
                usersData.error ? (<div>(usersData.error)</div>) :
                    usersData.users ? usersData.users.map(user => {
                        if (user.name) return (<div key={user.id}>{user.name}</div>)
                    }) : "Something is wrong"}

            <input type="text" onChange={(e)=> setTitle(e.target.value)}/>
            <button onClick={clickHandler}>Submit</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { usersData: state.users }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
        postUser : (title) => dispatch(postUser(title))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
