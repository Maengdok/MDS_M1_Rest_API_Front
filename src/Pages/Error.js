import { useRouteError } from "react-router-dom";

export const Error = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Une erreur est survenue.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}