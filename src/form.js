import React from 'react';
import { format } from 'util';
// import api from './routes';
const axios = require('axios');

export default class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: ""
        };
        // this.handleFirstName = this.handleFirstName.bind(this);
        // this.handleLastName = this.handleLastName.bind(this);
        // this.handleEmail = this.handleEmail.bind(this);
        // this.handlePassword = this.handlePassword.bind(this);
        this.change = this.change.bind(this);
    }
    

    change = e => {
        // this.bind(e);
        this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    
    
    onSubmit = e => {
        e.preventDefault();
        // this.props.onSubmit(this.state);
        // api.createUser(this.state.first_name, this.state.last_name, this.state.email, this.state.password);
        // this.setState({
        //     first_name: e.target.value,
        //     last_name: e.target.value,
        //     email: e.target.value,
        //     password: e.target.value
        // });
        // console.log(this.state);
        axios.post('http://localhost:8000/api/users/', {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password   

        })
            .then(response => {
                console.log(response, 'User added!');
            })
            .catch(err => {
                console.log(err, 'User not added, try again');
            });
        // this.props.onChange({
        //     first_name: "",
        //     last_name: "",
        //     email: "",
        //     password: ""
        // });

        
    };
    render() {
        return (
            <form>
                <input
                    name="first_name"
                    placeholder="First name"
                    value={this.state.first_name}
                    onChange={e => this.change(e)}
                />
                <br />
                <input
                    name="last_name"
                    placeholder="Last name"
                    value={this.state.last_name}
                    onChange={e => this.change(e)}
                />
                <br />
                <input
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={e => this.change(e)}
                />
                <br />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={e => this.change(e)}
                />
                <br />
                <button onClick={e => this.onSubmit(e)}>Submit</button>
             </form>
        )
    }
}