import { Component } from 'react';
import jwt from "jwt-decode";
import {redirect} from "react-router-dom";
import axios from "axios";

export default class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: '',
            response: false,
            status: 500,
            message: 'Le post n\'a pas pu être enregistré.',
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
        if (!this.state.title || !this.state.content) {
            throw new Error('Le post doit posséder un titre et un contenu.');
        } else {
            const body = {
                'title': this.state.title,
                'content': this.state.content
            };

            axios.post('http://localhost:3000/posts', body, {
                headers: {
                    'Access-Control-Allow-Origin': 'http://localhost:3000',
                    'Content-Type': 'application/json',
                    'Authorization': window.sessionStorage.getItem('token'),
                },
            })
                .then((res) => {
                    this.setState({
                        response: true,
                        status: res.status,
                        message: 'Le post à bien été enregistré.',
                    });
                })
                .catch((err) => console.log(err));
        }
        event.preventDefault();
    }

    verifyUserRole = () => {
        const token = window.sessionStorage.getItem('token');

        if (!token) {
            return false;
        } else {
            let role = jwt(token).role;
            return role === 'ROLE_ADMIN';
        }
    }

    render = () => {
        if (this.verifyUserRole()) {
            return (
                <>
                    <h2>Post Page</h2>
                    { this.state.response && (
                            <div>
                                <p>{this.state.status} - { this.state.message }</p>
                            </div>
                        )
                    }
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Title:
                            <input type={"text"} name={"title"} placeholder={"Titre de l'article"} value={this.state.title}
                                   onChange={this.handleChange}/>
                        </label>
                        <label>
                            Password:
                            <textarea name={"content"} placeholder={"Votre message..."} value={this.state.content}
                                      onChange={this.handleChange}/>
                        </label>
                        <input type={"submit"} value={"Valider"}/>
                    </form>
                </>
            );
        } else {
            redirect('/forbidden');
        }
    }
}
