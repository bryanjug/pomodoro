import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./css/style.css";
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    document.querySelector("#root")
);

