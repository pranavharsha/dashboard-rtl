import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Navbar, NavbarBrand, Nav, NavItem, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { logoutAction } from '../actions/loginActions';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Navbar color="dark" light expand="md">
                    <NavbarBrand className="navBrand">
                        Admin Section
                    </NavbarBrand>
                    <Nav className="ml-2 navBar" navbar>
                        <NavItem className="">
                            <Link to="/">Members</Link>
                        </NavItem>
                        <NavItem className="">
                            <Link to="/">Products</Link>
                        </NavItem>
                        <NavItem className="">
                            <Link to="/">Reporting</Link>
                        </NavItem>
                        <NavItem className="">
                            <Link to="/">Users</Link>
                        </NavItem>
                    </Nav>
                    {
                        this.props.islogin ? (
                            <div className="navRight ml-auto">
                                <div className="userNameDiv">{this.props.userDetails.name}</div>
                                <div className="logoutDiv">
                                    <Button className="btn logoutBtn" onClick={() => this.props.logoutAction()}>Logout</Button>
                                </div>
                            </div>
                        ) : undefined
                    }
                </Navbar>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    islogin: state.login.islogin,
    userDetails: state.login.userDetails,
});

export default connect(mapStateToProps, {
    logoutAction
})(Header);