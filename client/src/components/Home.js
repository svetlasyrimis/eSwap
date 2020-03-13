import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Navbar from '../layouts/Navbar';

const Home = (props) => {
    console.log(props);
    return (
        <div className="homepage">
            <div className="top-img"></div>
            <Jumbotron className="home-container">
                <Navbar />
                <div className="home-nav" style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>
                        <NavLink to="/sign-up">Sign Up</NavLink>
                    </span>
                    <span>Login</span>
                </div>
                <h1 className="home-name">Mando List</h1>
                <input type="text" name="" id=""/>
                <Button>Search</Button>
            </Jumbotron>
            <div className="bottom-img"></div>
        </div>
    )
}

export default Home;
