import React, { Component } from 'react';
import { getItems } from '../services/items';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';
import Routes from '../routes'
import SignUp from '../screens/SignUp';
// import Navbar from '../layouts/Navbar';
import Header from '../screens/Header';
import SignIn from '../screens/SignIn';
import SearchPage from '../screens/SearchPage';
// import { Route } from 'react-router-dom';

export class AppContainer extends Component {
    constructor() {
        super();
        this.state = {
            user: null,
            items: []
        }
    }

    // async componentDidMount() {
    //     try {
    //         const items = await getItems()
    //         this.setState({ items })
    //     } catch (err) {
    //         console.error(err)
    //     }
    // }

    // addItem = item => this.setState({ items: [...this.state.items, item] })

    // setUser = user => this.setState({ user })

    // clearUser = () => this.setState({ user: null })

    render() {
        const { user, items } = this.state
        return (
            <div>
                <Header user={user} />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/sign-up" component={SignUp} />
                    <Route path="/sign-in" component={SignIn} />
                    <Route path="/search" component={SearchPage} />
                </Switch>
            </div>
        )
    }
}

export default AppContainer;
