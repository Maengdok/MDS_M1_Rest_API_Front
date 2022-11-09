import {redirect} from "react-router-dom";

export const LogOut = () => {
    window.sessionStorage.clear();

    redirect('/');
}