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
                </div>
                <h1 className="home-name">eSwap</h1>
            </Jumbotron>
            <div className="bottom-img"></div>
        </div>
    )
}

export default Home;
