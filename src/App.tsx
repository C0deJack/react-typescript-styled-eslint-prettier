import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';
// import { theme1, theme2 } from './styles/theme';

import Header from './components/container/Header';
import NavBar from './components/styled/NavBar';
import Home from './components/container/Home';
import PageOne from './components/container/PageOne';
import PageTwo from './components/container/PageTwo';
import Footer from './components/container/Footer';

class App extends Component {

    // state = {
    //     theme: theme1
    // }

    // handleThemeChange = (e:any) => {
    //   let theme = e.target.value
    //   theme === 'theme1' ? (theme = theme1) : (theme = theme2)
    //   this.setState({ theme })
    // }

    render() {
        return (
            // <ThemeProvider theme={theme}>
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
            // </ThemeProvider>
        );
    }
};

export default App;
