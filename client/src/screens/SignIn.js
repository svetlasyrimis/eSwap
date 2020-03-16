import React, { Component } from 'react'
import { signUp, signInUser } from '../services/auth';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../layouts/Navbar';

class SignIn extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: '',
            isError: false,
            errorMsg: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
            isError: false,
            errorMsg: ''
        })
    }

    onSignIn = event => {
        event.preventDefault()

        const { history, setUser } = this.props

        signInUser(this.state)
            .then(res => setUser(res.user))
            .then(() => history.push('/'))
            .catch(error => {
                console.error(error)
                this.setState({
                    isError: true,
                    errorMsg: 'Invalid Credentials',
                    username: '',
                    password: ''
                })
            })
    }

    renderError = () => {
        const toggleForm = this.state.isError ? 'danger' : ''
        if (this.state.isError) {
            return (
                <button type="submit" className={toggleForm}>
                    {this.state.errorMsg}
                </button>
            )
        } else {
            return <button type="submit">Sign In</button>
        }
    }

    render() {
        const { username, password } = this.state

        return (
            // <Container className="mando-sign-in">
            //     <Navbar />
            //     <h4>eSwap Sign In</h4>
            //     <Form onSubmit={this.onSignIn}>
            //         <Form.Group controlId="formBasicUsername">
            //             {/* <Form.Label>Username</Form.Label> */}
            //             <Form.Control required type="text" name="username" id="" value={username} onChange={this.handleChange} placeholder="Username" />
            //         </Form.Group>
            //         <Form.Group controlId="formBasicPassword">
            //             {/* <Form.Label>Password</Form.Label> */}
            //             <Form.Control required type="password" name="password" value={password} onChange={this.handleChange} placeholder="Password" />
            //         </Form.Group>
            //         {this.renderError()}
            //     </Form>
            //     <p>By creating an account, you agree to our   <Link to="/">terms</Link></p>
            //     <p>Don't have an account?  <Link to="/sign-up">Sign Up</Link></p>
            // </Container>
            <div className="row">
                <div className="form-container">
                    <h3>Sign In</h3>
                    <form onSubmit={this.onSignIn}>
                        <label>Username</label>
                        <input
                            required
                            type="text"
                            name="username"
                            value={username}
                            placeholder="Enter Username"
                            onChange={this.handleChange}
                        />
                        <label>Password</label>
                        <input
                            required
                            name="password"
                            value={password}
                            type="password"
                            placeholder="Password"
                            onChange={this.handleChange}
                        />
                        {this.renderError()}
                    </form>
                </div>
            </div>
        )
    }
}

export default SignIn