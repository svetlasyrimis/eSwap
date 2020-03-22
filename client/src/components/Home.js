import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const Home = (props) => {
    console.log(props);
    return (
        <div className="homepage">
            <div className="top-img"></div>
            <Jumbotron className="home-container">
                <div className="home-nav" style={{ display: "flex", justifyContent: "space-between" }}>
                </div>
                <h1 className="home-name">eSwap</h1>
            </Jumbotron>
            <div className="bottom-img"></div>
        </div>
    )
}

export default Home;
