import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Col, Row, Button, Container
} from 'reactstrap';
import '../styles/Home.css';
import MembersTable from './MembersTable';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Container fluid={true} className="pl-4 pr-4 pt-3 pb-3">
                    <h2 className="">Members List</h2>
                    <Row className="ml-0 mr-0 mt-2">
                        <Col className="tableFilterDiv" xs="12"></Col>
                        <Col className="addNewDiv" xs="12">
                            <Button className="btn cnmBtn" color="success">Create a new member</Button>
                        </Col>
                    </Row>
                    <Col className="membersTable">
                        <MembersTable />
                    </Col>
                </Container>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, {

})(Home);