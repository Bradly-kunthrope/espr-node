import React from 'react';
import { format } from 'util';
import api from './routes';

export default class Form extends React.Component{
    state = {
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    }

    change = e => {
        this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    
    onSubmit = e => {
        e.preventDefault();
        // this.props.onSubmit(this.state);
        api.createUser(this.state.first_name, this.state.last_name, this.state.email, this.state.password);
        this.setState({
            first_name: "",
            last_name: "",
            email: "",
            password: ""
        });
        this.props.onChange({
            first_name: "",
            last_name: "",
            email: "",
            password: ""
        });

        
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