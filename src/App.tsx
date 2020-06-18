import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';
import { lightTheme } from './styles/theme';

import Header from './components/container/Header';
import NavBar from './components/styled/NavBar';
import Home from './components/container/Home';
import PageOne from './components/container/PageOne';
import PageTwo from './components/container/PageTwo';
import Footer from './components/container/Footer';

function App() {

    return (
        <ThemeProvider theme={lightTheme}>
            <>
                <GlobalStyles />
                <Router>
                    {/* We pass the setTheme function (lift state up) to the Header */}
                    <Header />
                    <NavBar />
                    <Switch>
                        <Route exact={true} path="/" component={Home} />
                        <Route exact path={'/one'} component={PageOne} />
                        <Route exact path={'/two'} component={PageTwo} />
                        <Route component={Home} />
                    </Switch>
                    <Footer />
                </Router>
            </>
        </ThemeProvider>
    );
};

export default App;
