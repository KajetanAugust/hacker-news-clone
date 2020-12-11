import React from 'react'

import '../App.css'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { ThemeProvider } from "../contexts/theme";

import Feed from "./Feed";
import Nav from "./Nav";
import User from "./User";


class App extends React.Component {

    state={
        theme: 'light',
        toggleTheme: () => {
            this.setState(({ theme }) => ({
                theme: theme === 'light' ? 'dark' : 'light'
            }))
        }
    }

    render() {
        return(
            <Router>
                <ThemeProvider value={this.state}>
                    <div className={this.state.theme}>
                        <div className='container'>
                            <Nav />
                            <Switch>
                                <Route exact path='/'>
                                    <Redirect to='/feed/top'/>
                                </Route>
                                <Route exact path='/feed/top' render={() => <Feed type='top' /> }/>
                                <Route exact path='/feed/new' render={() => <Feed type='new' /> }/>
                                <Route path='/user' component={User} />
                            </Switch>

                        </div>
                    </div>

                </ThemeProvider>
            </Router>
        )
    }
}


export default App
