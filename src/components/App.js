import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import Profile from './Profile';
import './index.css';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/search" component={Search} />
                <Route path="/profile" component={Profile} />
            </Switch>
        </Router>
    );
}

export default App;
