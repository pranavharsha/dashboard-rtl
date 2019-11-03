import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Col, Row, Button, Container
} from 'reactstrap';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Container fluid={true} className="pl-2 pr-2">
                    Home
                </Container>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {

})(Home);