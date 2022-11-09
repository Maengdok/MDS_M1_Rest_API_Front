import { Component } from 'react';

export default class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        this.verifyPasswords();
        event.preventDefault();
    }

    verifyPasswords = () => {
        if (this.state.confirmPassword === this.state.password) {
            // TODO: Request API
        } else {
            throw new Error("Passwords don't match.");
        }
    }

    render = () => {
        return (
            <>
                <h2>LogIn Page</h2>
                <form>
                    <label onSubmit={this.handleSubmit}>
                        Email:
                        <input type={"email"} placeholder={"your.email@msg.com"} value={this.state.email} onChange={this.handleChange} />
                    </label>
                    <label>
                        Password:
                        <input type={"password"} placeholder={"********"} value={this.state.password} onChange={this.handleChange} />
                    </label>
                    <label>
                        Repeat password:
                        <input type={"password"} placeholder={"********"} value={this.state.confirmPassword} onChange={this.handleChange} />
                    </label>
                    <input type={"submit"} value={"S'inscrire"} />
                </form>
            </>
        );
    }
}