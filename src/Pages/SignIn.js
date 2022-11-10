import { Component } from 'react';
import axios from "axios";

export default class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            message: '',
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
        this.verifyPasswords();
        event.preventDefault();
    }

    verifyPasswords = () => {
        if (this.state.confirmPassword === this.state.password) {
            const body = {
                'email': this.state.email,
                'password': this.state.password
            };

            axios.post('http://localhost:3001/user/register', body, {
                headers: {
                    'Access-Control-Allow-Origin': 'http://localhost:3001',
                    'Content-Type': 'application/json'
                },
            })
                .then((res) => this.setState({ message: res.data.message }))
                .catch((err) => this.setState({ message: err }));
        } else {
            throw new Error("Les mots de passes ne correspondent pas.");
        }
    }

    render = () => {
        return (
            <>
                <h2>SignIn Page</h2>
                { this.state.message && (
                        <div>
                            <p>{ this.state.message }</p>
                        </div>
                    )
                }
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email:
                        <input type={"email"} name="email" placeholder={"your.email@msg.com"} value={this.state.email} onChange={this.handleChange} />
                    </label>
                    <label>
                        Password:
                        <input type={"password"} name="password" placeholder={"********"} value={this.state.password} onChange={this.handleChange} />
                    </label>
                    <label>
                        Repeat password:
                        <input type={"password"} name="confirmPassword" placeholder={"********"} value={this.state.confirmPassword} onChange={this.handleChange} />
                    </label>
                    <input type={"submit"} value={"S'inscrire"} />
                </form>
            </>
        );
    }
}