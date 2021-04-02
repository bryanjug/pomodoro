import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from "./components/App";
import Timer from './components/Timer';

// <Route exact path="/" component={Timer}/>

ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    document.querySelector("#root")
);
