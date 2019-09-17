import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
// import axios from 'axios';

console.log();

const FriendsList = () => {
    const [friends, setFriends] = useState([]);
    const [newFriend, setNewFriend] = useState({
        age: '',
        email: '',
        id: Date.now(), 
        name: ''
        // isPending: false
    });

    useEffect(() => {
        axiosWithAuth().get('/friends')
        .then(res => {
            console.log('Friend List results: ', res);
            setFriends(res.data);
        })
        .catch(err => {
            console.log("Error! ", err)
        })
    }, [])


    const handleChange = event => {
        event.preventDefault();
        setNewFriend({
            ...newFriend,
            [event.target.name]: event.target.value});
    }

    const submitHandler = event => {
        // event.preventDefault();
        axiosWithAuth().post('http://localhost:5000/api/friends', newFriend)
        .then(res => {
            console.log('Results from POST request: ', res);
        })
        .catch(err => {
            console.log("Error! ", err)
        })
        // newFriend.isPending = true;
    }


    return (
    <div>
        <h1>Welcome back, user!</h1>
        <h3>Do you want to make new friends?</h3>

        <form className="friendslist-form" onSubmit={submitHandler}>
            Full Name:
            <input type="text" name="name"  onChange={handleChange}></input>

            Age:

            <input type="text" name="age"  onChange={handleChange}></input>

            Email: 
            <input type="email" name="email"  onChange={handleChange}></input>
            <button type="submit">Add Friend</button>
        </form>

        {friends.map(item => {
            return (
                <div className="one-friend" key={item.id}>
                        <div className="friend-card">
                        <h1>{item.name}</h1>
                        <div>
                            <p>Age: {item.age}</p>
                            <p>{item.email}</p>
                        </div>
                        </div>
                </div>
            )
        })}
    </div>
    )
}

export default FriendsList;