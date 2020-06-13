import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';
import { theme } from './styles/theme';

import Header from './components/container/Header';
import Home from './components/container/Home';
import PageOne from './components/container/PageOne';
import PageTwo from "./components/container/PageTwo";


function App() {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <Router>
                    <Header />
                    <Switch>
                        <Route exact={true} path='/' component={Home} />
                        <Route exact path={'/one'} component={PageOne} />
                        <Route exact path={'/two'} component={PageTwo} />
                        <Route component={Home} />
                    </Switch>
                </Router>
            </>
        </ThemeProvider>
    );
}

export default App;
