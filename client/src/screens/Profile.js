import React, { Component } from 'react';
import { signUp, signInUser } from '../services/auth';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../layouts/Navbar';

export class Profile extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            isError: false,
            errorMsg: ''
						items: []
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
            isError: false,

				})
		}
	render() {
		return(
			<>
			</>
		)
	}

