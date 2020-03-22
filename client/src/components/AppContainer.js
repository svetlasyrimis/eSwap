import React, { Component } from 'react';
import { getItems } from '../services/items';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';
import Routes from '../routes'
import SignUp from '../screens/SignUp';
// import Navbar from '../layouts/Navbar';
import Header from '../screens/Header';
import SignIn from '../screens/SignIn';
import { verifyToken } from '../services/auth'
import { verifyUser } from '../services/auth'

class AppContainer extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      items: []
    }
  }

  async componentDidMount() { 
    const user = await verifyToken();
    if (user) {
      this.setState({ user })
      const items = await getItems()
      this.setState({ items })
    }
  }

  addItem = item => this.setState({ items: [...this.state.items, item] })

  deleteItemFromList = itemId => this.setState(prevState => ({
    items: prevState.items.filter(item =>
      item._id !== itemId
    )
  }))

  setUser = async user => {
    const items = await getItems()
    this.setState({ user, items })
  }

  clearUser = () => this.setState({ user: null, items: [] })

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
            deleteItemFromList={this.deleteItemFromList}
          />
        </Switch>
      </div>
    )
  }
}

export default AppContainer;
