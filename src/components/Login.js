import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Col, Row, Container
} from 'reactstrap';
import LoginForm from './LoginForm';
import { loginAction, logoutAction } from '../actions/loginActions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.loginsubmit = this.loginsubmit.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.islogin) {
            nextProps.history.push('/home');
        }
        return null;
    }

    loginsubmit(values) {
        this.props.loginAction(values);
    }
    render() {
        return (
            <Container fluid={true} className="pl-2 pr-2">
                <Row className="ml-0 mr-0 mt-4 pt-4">
                    <Col className="" xs="3"></Col>
                    <Col className="" xs="6">
                        <LoginForm onSubmit={this.loginsubmit} />
                    </Col>
                    <Col className="" xs="3"></Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    islogin: state.login.islogin,
    userDetails: state.login.userDetails,
});

export default connect(mapStateToProps, {
    loginAction, logoutAction
})(Login);