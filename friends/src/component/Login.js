import React from 'react';
import axios from 'axios';

 class Login extends React.Component {

state = {
    credentials: {
        username: '',
        password: ''
    }

}

//event change upon 
handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state, 'state stuff')
  };



    render(){
       return (
        <form onSubmit={''}>
            <input 
            type ="text" 
            name="username"
            placeholder="username" 
            value={this.state.credentials.username} 
            onChange={this.handleChange} />

            <input 
            name="password"
            type="password" 
            placeholder="password" 
            value={this.state.credentials.password} 
            onChange={this.handleChange} />
            <button type="submit">Submit</button>
        </form>
    ) 
    }

};

export default Login;