import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/container/Header';
import Home from './components/container/Home';
import PageOne from './components/container/PageOne';


function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact={true} path='/' component={Home} />
                <Route exact path={'/:one'} component={PageOne} />
                <Route component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
