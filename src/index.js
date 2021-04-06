import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from "./components/App";
import Timer from './components/Timer';
import DayStats from './components/DayStats';
import WeekStats from './components/WeekStats';
import MonthStats from './components/MonthStats';
import YearStats from './components/YearStats';

ReactDOM.render(
    <Router>
        <Route exact path="/" component={Timer} />
        <Route path="/stats/day" component={DayStats} />
        <Route path="/stats/week" component={WeekStats} />
        <Route path="/stats/month" component={MonthStats} />
        <Route path="/stats/year" component={YearStats} />
        <App />
    </Router>, 
    document.querySelector("#root")
);
