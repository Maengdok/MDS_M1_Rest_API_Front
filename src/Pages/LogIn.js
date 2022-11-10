import { Component } from 'react';
import axios from "axios";
import {Navigate} from "react-router-dom";

export default class LogIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        if (!this.state.email || !this.state.password) {
            throw new Error('L\'email et le mot de passe ne peuvent pas être vides.');
        } else {
            const body = {
                'email': this.state.email,
                'password': this.state.password
            };

            axios.post('http://localhost:3000/user/login', body, {
                headers: {
                    'Access-Control-Allow-Origin': 'http://localhost:3000',
                    'Content-Type': 'application/json'
                },
            })
                .then((res) => {
                    window.sessionStorage.setItem("token", res.data.token)
                    this.verifyUserLogIn();
                })
                .catch((err) => console.log(err));
        }

        event.preventDefault();
    }

    verifyUserLogIn = () => {
        if (window.sessionStorage.length > 0 ) {
            return <Navigate to={'/'} />
        }
    }

    render = () => {
        return (
            <>
                <h2>LogIn Page</h2>
                <form onSubmit={this.handleSubmit} method={'POST'}>
                    <label>
                        Email:
                        <input type={"email"} name={"email"} placeholder={"your.email@msg.com"} value={this.state.email} onChange={this.handleChange} />
                    </label>
                    <label>
                        Password:
                        <input type={"password"} name={"password"} placeholder={"********"} value={this.state.password} onChange={this.handleChange} />
                    </label>
                    <input type={"submit"} value={"Valider"} />
                </form>
            </>
        );
    }
}