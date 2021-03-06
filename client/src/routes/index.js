import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../screens/Home'
import Landing from '../screens/Landing'
import SignIn from '../screens/SignIn'
import SignOut from '../screens/SignOut'
import SignUp from '../screens/SignUp'
import Item from '../screens/Item'
import Items from '../screens/Items'
import ItemCreate from '../screens/ItemCreate'
import ItemEdit from '../screens/ItemEdit'
import SearchPage from '../screens/SearchPage'
import AuthenticatedRoute from './AuthenticatedRoute'

const Routes = ({ user, items, setUser, clearUser, addItem, deleteItemFromList }) => (
    <Switch>
        <Route
            exact
            path="/"
            render={props => (user ? <Home /> : <Landing {...props} items={items} />)}
        />
        <Route
            path="/sign-in"
            render={props => <SignIn {...props} setUser={setUser} />}
        />
        <Route
            path="/sign-up"
            render={props => <SignUp {...props} setUser={setUser} />}
        />
        <Route
            exact
            path="/sign-out"
            render={props => <SignOut {...props} clearUser={clearUser} user={user} />}
        />
        <Route
            exact
            path="/search"
            render={props => <SearchPage {...props} clearUser={clearUser} items={items} user={user} />}
				/>
        <AuthenticatedRoute
            exact
            path="/items"
            user={user}
            render={props => <Items {...props} user={user} items={items} />}
        />
        <AuthenticatedRoute
            exact
            path="/items/:id"
            user={user}
        render={props => <Item {...props} deleteItemFromList={deleteItemFromList} />}
        />
        <AuthenticatedRoute
            exact
            user={user}
            path="/items/:id/edit"
            render={props => <ItemEdit {...props} />}
        />
        <AuthenticatedRoute
            user={user}
            path="/create"
            render={props => <ItemCreate {...props} addItem={addItem} />}
        />
    </Switch>
)

export default Routes
