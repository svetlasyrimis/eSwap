import React, { Component } from 'react';
import { getItems } from '../services/items';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';
import Routes from '../routes'
import SignUp from '../screens/SignUp';
// import Navbar from '../layouts/Navbar';
import Header from '../screens/Header';
import SignIn from '../screens/SignIn';
<<<<<<< HEAD
import SearchPage from '../screens/SearchPage';
=======

>>>>>>> 64640cb0010c579dae8e7d72c0e53385bce678b0
// import { Route } from 'react-router-dom';
import { verifyToken } from "../services/auth"

class AppContainer extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      items: []
    }
  }

  async componentDidMount() {
    const user = await verifyToken()
    console.log(user)
    if (user) {
      try {
        const items = await getItems()
        console.log('items', items);
        this.setState({ items })
      } catch (err) {
        console.error(err)
      }
    }
    this.setState({user})
  }

  addItem = item => this.setState({ items: [...this.state.items, item] })

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  render() {
    const { user, items } = this.state
    return (
      <div>
        <Header user={user} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Routes
            items={items}
            user={user}
            setUser={this.setUser}
            addItem={this.addItem}
            clearUser={this.clearUser}
          />
        </Switch>
      </div>
    )
  }
}

export default AppContainer;
