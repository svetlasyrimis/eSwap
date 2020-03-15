import React, { Component } from 'react';
import { signUp, signInUser } from '../services/auth';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../layouts/Navbar';

export class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            isError: false,
            errorMsg: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
            isError: false,

        });
    }

    onSignUp = event => {
        event.preventDefault()

        const { history, setUser } = this.props

        signUp(this.state)
            .then(() => signInUser(this.state))
            .then(res => setUser(res.user))
            .then(() => history.push('/'))
            .catch(error => {
                console.error(error)
                this.setState({
                    email: '',
                    password: '',
                    passwordConfirmation: '',
                    isError: true,
                    errorMsg: 'Sign Up Details Invalid'
                })
            })
    }

    renderError = () => {
        const toggleForm = this.state.isError ? 'danger' : ''
        if (this.state.isError) {
            return (
                <Button type="submit" className={toggleForm}>
                    {this.state.errorMsg}
                </Button>
            )
        } else {
            return <Button style={{ width: "100%", backgroundColor: '#3c3a51', color: "#fff" }} type="submit">Sign Up</Button>
        }
    }

    render() {
        const { email, username, password, passwordConfirmation } = this.state;
        return (
            <Container className="mando-sign-up">
                <Navbar />
                <h4>eSwap Sign Up</h4>
                <Form onSubmit={this.onSignUp}>
                    <Form.Group controlId="formBasicUsername">
                        {/* <Form.Label>Username</Form.Label> */}
                        <Form.Control required type="text" name="username" id="" value={username} onChange={this.handleChange} placeholder="Username" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control required type="email" name="email" value={email} onChange={this.handleChange} placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control required type="password" name="password" value={password} onChange={this.handleChange} placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPasswordConfirmation">
                        {/* <Form.Label>Password Confirmation</Form.Label> */}
                        <Form.Control required type="password" name="passwordConfirmation" value={password} onChange={this.handleChange} placeholder="Confirm Password" />
                    </Form.Group>
                    {this.renderError()}
                </Form>
                <p>By creating an account, you agree to our   <Link to="/">terms</Link></p>
                <p>Already have an account?  <Link to="/sign-in">Sign In</Link></p>
            </Container>
            // <div className="row">
            //     <div className="form-container">
            //         <h3>Sign Up</h3>
            //         <form onSubmit={this.onSignUp}>
            //             <label>Username</label>
            //             <input
            //                 required
            //                 type="text"
            //                 name="username"
            //                 value={username}
            //                 placeholder="Enter username"
            //                 onChange={this.handleChange}
            //             />
            //             <label>Email address</label>
            //             <input
            //                 required
            //                 type="email"
            //                 name="email"
            //                 value={email}
            //                 placeholder="Enter email"
            //                 onChange={this.handleChange}
            //             />
            //             <label>Password</label>
            //             <input
            //                 required
            //                 name="password"
            //                 value={password}
            //                 type="password"
            //                 placeholder="Password"
            //                 onChange={this.handleChange}
            //             />
            //             <label>Password Confirmation</label>
            //             <input
            //                 required
            //                 name="passwordConfirmation"
            //                 value={passwordConfirmation}
            //                 type="password"
            //                 placeholder="Confirm Password"
            //                 onChange={this.handleChange}
            //             />
            //             {this.renderError()}
            //         </form>
            //     </div>
            // </div>
        )
    }
}

export default SignUp;