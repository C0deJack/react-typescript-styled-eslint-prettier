import React, { Component, ChangeEvent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';
import { theme1, theme2 } from './styles/theme';

import Header from './components/container/Header';
import NavBar from './components/styled/NavBar';
import Home from './components/container/Home';
import PageOne from './components/container/PageOne';
import PageTwo from './components/container/PageTwo';
import Footer from './components/container/Footer';

interface AppState {
        theme: {
            theme_background_color: string;
            theme_color: string;
            brand_color_blue: string;
            brand_color_teal: string;
            brand_color_magenta: string;
        }
}

class App extends Component {

    state = {
        theme: theme1
    }

    handleThemeChange = (e:ChangeEvent<HTMLInputElement>):void => {
        let theme: {};
        e.target.checked ? (theme = theme1) : (theme = theme2)
        this.setState({ theme })
    }

    render() {
        return (
            <ThemeProvider theme={this.state.theme}>
                <>
                    <GlobalStyles />
                    <Router>
                        <Header />
                        <input type='checkbox' onChange={this.handleThemeChange} />
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

export default App;
