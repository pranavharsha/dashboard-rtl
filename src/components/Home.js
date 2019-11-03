import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Col, Row, Button, Container, Input
} from 'reactstrap';
import '../styles/Home.css';
import MembersTable from './MembersTable';
import { filterMembersDataAction } from '../actions/membersActions';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { filterValue: "" };
        this.filterOnChange = this.filterOnChange.bind(this);
    }

    filterOnChange(event) {
        this.setState({ ...this.state, filterValue: event.target.value })
    }

    render() {
        return (
            <React.Fragment>
                <Container fluid={true} className="pl-4 pr-4 pt-3 pb-3">
                    <h2 className="">Members List</h2>
                    <Row className="ml-0 mr-0 mt-3">
                        <Col className="tableFilterDiv" xs="12" md="5">
                            <Input className="filterInput" placeholder="Filter by Name or Id"
                                value={this.state.filterValue}
                                onChange={(event) => this.filterOnChange(event)} />
                        </Col>
                        <Col className="tableFilterDiv" xs="12" md="3">
                            <Button className="btn cnmBtn" 
                                // disabled={this.state.filterValue ? false : true}
                                onClick={() => this.props.filterMembersDataAction(this.state.filterValue)}
                            >Filter</Button>
                        </Col>
                        <Col className="addNewDiv text-right" xs="12" md="4">
                            <Button className="btn cnmBtn" color="success">Create a new member</Button>
                        </Col>
                    </Row>
                    <Col className="membersTable pt-3">
                        <MembersTable />
                    </Col>
                </Container>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    membersdata: state.members.membersdata,
    memberSections: state.members.memberSections
});

export default connect(mapStateToProps, {
    filterMembersDataAction
})(Home);