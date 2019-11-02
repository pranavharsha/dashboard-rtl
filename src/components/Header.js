import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Navbar, NavbarBrand, Nav, NavItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

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
                </Navbar>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, {

})(Header);