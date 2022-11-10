import {Navigate} from "react-router-dom";

export const LogOut = () => {
    window.sessionStorage.clear();

    return <Navigate to={'/'} />
}