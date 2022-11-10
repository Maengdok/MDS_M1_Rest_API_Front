import { Component } from 'react';
import axios from "axios";

export default class Posts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            message: '',
            data: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fetchPosts();
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    fetchPosts = () => {
        axios.get('http://localhost:3001/posts', {
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3001',
                'Content-Type': 'application/json'
            },
        })
            .then((res) => {
                this.setState({ data: [...this.state.data, res.data] });
            })
            .catch((err) => console.log(err));
    }

    render = () => {
        return (
            <>
                <h2>Posts Page</h2>
                { this.state.data.length > 0 ?
                    this.state.data.map((key) => (
                         key.map((object) => (
                              <div key={object._id}>
                                  <h3>{object.title}</h3>
                                  <p>{object.content}</p>
                              </div>
                         ))
                     ))
                    :
                    <div>
                        <h3>Pas de posts</h3>
                    </div>
                }
            </>
        );
    }
}
