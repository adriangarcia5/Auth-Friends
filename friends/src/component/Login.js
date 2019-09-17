import React from 'react';
import axios from 'axios';

 class Login extends React.Component {
     constructor(props){
         super(props)

         this.state = {
            credentials: {
                username: 'Lambda School',
                password: 'i<3Lambd4'
            }
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


  login = e => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/friends') //
        console.log(this.props, 'props')
      })
      .then( res => console.log('submitted something'))
      .catch(err => console.log(err.response));
  };


    
    render(){
       return (
        <form onSubmit={this.login}>
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