import { Component } from 'react';

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
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
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
                    <input type={"submit"} value={"Valider"} />
                </form>
            </>
        );
    }
}