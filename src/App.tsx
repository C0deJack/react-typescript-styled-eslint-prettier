import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';
import { lightTheme, darkTheme } from './styles/theme';

import Header from './components/container/Header';
import NavBar from './components/styled/NavBar';
import Home from './components/container/Home';
import PageOne from './components/container/PageOne';
import PageTwo from './components/container/PageTwo';
import Footer from './components/container/Footer';
import { ThemeType, AppState } from './types';

interface AppProps {
    themeType: ThemeType;
}

export class App extends Component<AppProps> {

    render () {
        return (
            <ThemeProvider theme={this.props.themeType === 'light' ? lightTheme : darkTheme}>
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
};

const mapStateToProps = (state:AppState):AppProps => ({
    themeType: state.themeType,
});

export default connect(mapStateToProps)(App);
