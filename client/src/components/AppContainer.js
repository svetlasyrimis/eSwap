import React, { Component } from 'react';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';
// import { Route } from 'react-router-dom';

export class AppContainer extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </div>
        )
    }
}

export default AppContainer;
