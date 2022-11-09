import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
    Route
} from "react-router-dom";

import './index.css';
import reportWebVitals from './reportWebVitals';
import {App} from "./App";
import {Navbar} from "./Components/Navbar";
import {Error} from "./Pages/Error";
import {LogOut} from "./Pages/LogOut";
import SignIn from "./Pages/SignIn";
import Posts from "./Pages/Posts";
import LogIn from "./Pages/LogIn";
import {Footer} from "./Components/Footer";

const router = createBrowserRouter([
    {
        path: "",
        errorElement: <Error />,
        children: [
            {
                errorElement: <Error />,
                children: [
                    {
                        path: "/",
                        element: <App />,
                    },
                    {
                        path: "/login",
                        element: <LogIn />,
                    },
                    {
                        path: "/logout",
                        element: <LogOut />,
                    },
                    {
                        path: "/signin",
                        element: <SignIn />,
                    },
                    {
                        path: "/posts",
                        element: <Posts />,
                    },
                ]
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Navbar />
        <RouterProvider router={router} />
        <Footer />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
