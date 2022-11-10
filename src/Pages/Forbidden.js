import { useRouteError } from "react-router-dom";

export const Forbidden = () => {

    return (
        <div id="forbidden-page">
            <h1>Interdit !</h1>
            <p>Vous n'avez pas les droits requis d'accéder à cette page.</p>
        </div>
    );
}