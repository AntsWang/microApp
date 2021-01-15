

import React from 'react';
import { Button } from "antd";
import styles from './App.css';
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import Test from './pages/test/test';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/test" component={Test}></Route>
                <Route path="/" component={Home}></Route>
            </Switch>
        </Router>

    );
}
export default App;

