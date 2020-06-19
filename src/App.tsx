import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';
import { Theme } from './styles/theme';

import Header from './components/container/Header';
import NavBar from './components/styled/NavBar';
import Home from './components/container/Home';
import PageOne from './components/container/PageOne';
import PageTwo from './components/container/PageTwo';
import Footer from './components/container/Footer';
import { AppState } from './types';

interface AppProps {
    theme: Theme;
}

export class App extends Component<AppProps> {
    render() {
        const theme = this.props.theme;
        return (
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyles />
                    <Router>
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
    }
}

const mapStateToProps = (state: AppState): AppProps => ({
    theme: state.theme,
});

export default connect(mapStateToProps)(App);
