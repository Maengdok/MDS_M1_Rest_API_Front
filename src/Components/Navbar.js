import { BrowserRouter as Router } from "react-router-dom";

export const Navbar = () => {
    return (
        <Router>
            <div id="sidebar">
                <a href={`/`}><h1>MDS M1 Rest API</h1></a>
                <nav>
                    <ul>
                        <li>
                            <a href={`/posts`}>Posts</a>
                        </li>
                        <li>
                            <a href={`/login`}>LogIn</a>
                        </li>
                        <li>
                            <a href={`/signin`}>SignIn</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </Router>
    );
}