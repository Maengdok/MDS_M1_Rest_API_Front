import { BrowserRouter as Router } from "react-router-dom";
import jwt from "jwt-decode";


const decodeJwt = () => {
    let token = window.sessionStorage.getItem('token');

    if (!token) {
        return false;
    } else {
        let role = jwt(token).role;
        return role === 'ROLE_ADMIN';
    }
}

export const Navbar = () => {
    return (
        <Router>
            <div id="sidebar">
                <a href={`/`}><h1>MDS M1 Rest API</h1></a>
                <nav>
                    <ul>
                            { decodeJwt() === false ?
                                <>
                                </>
                                :
                                <>
                                    <li>
                                        <a href={`/post`}>Créer un Post</a>
                                    </li>
                                </>
                            }
                        <li>
                            { window.sessionStorage.length > 0 ?
                                <>
                                    <a href={`/logout`}>Se déconnecter</a>
                                </>
                            :
                                <>
                                    <a href={`/login`}>Se connecter</a>
                                </>
                            }
                        </li>
                        <li>
                            <a href={`/signin`}>S'inscrire</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </Router>
    );
}