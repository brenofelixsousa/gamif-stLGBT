import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createSession, validateSession } from "./sessionManager";
import { BrowserRouter, Route, Link } from "react-router-dom";

(function() {
    const storage = window.localStorage;

    Promise.resolve()
        .then(validateSession)
            .catch(createSession)
        .then(() => console.table(storage))
        .finally(renderWebpage)
    ;

    function renderWebpage() {
        const public_url = process.env.PUBLIC_URL || '/';
        ReactDOM.render(
            <React.StrictMode>
                <BrowserRouter basename="{public_url}">
                    <App />
                </BrowserRouter>
            </React.StrictMode>,
            document.getElementById('root')
        );
    }
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
