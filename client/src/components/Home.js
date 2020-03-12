import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className="homepage">
            <div className="top-img">
                {/* <img src="/img/top-banner.jpg" alt="" width="100%" height="400px" /> */}
            </div>
            <Jumbotron className="home-container">
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
            <div className="bottom-img">
                {/* <img src="img/bottom-banner.jpg" alt="" width="100%" height="400px" /> */}
            </div>
        </div>
    )
}

export default Home;
