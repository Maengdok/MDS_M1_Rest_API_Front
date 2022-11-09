import { Component } from 'react';

export default class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: '',
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
                <h2>Post Page</h2>
                <form>
                    <label onSubmit={this.handleSubmit}>
                        Title:
                        <input type={"text"} placeholder={"Titre de l'article"} value={this.state.title}
                               onChange={this.handleChange}/>
                    </label>
                    <label>
                        Password:
                        <textarea placeholder={"Votre message..."} value={this.state.content}
                                  onChange={this.handleChange}/>
                    </label>
                    <input type={"submit"} value={"Valider"}/>
                </form>
            </>
        );
    }
}
