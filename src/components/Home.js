import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Col, Row, Button, Container, Input, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import '../styles/Home.css';
import MembersTable from './MembersTable';
import CreateMemberForm from './CreateMemberForm';
import { filterMembersDataAction, addMembersDataAction } from '../actions/membersActions';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { filterValue: "", isPopup: false };
        this.filterOnChange = this.filterOnChange.bind(this);
        this.togglePopup = this.togglePopup.bind(this);
        this.memberFormSubmit = this.memberFormSubmit.bind(this);
    }

    filterOnChange(event) {
        this.setState({ ...this.state, filterValue: event.target.value });
    }

    togglePopup() {
        this.setState({ ...this.state, isPopup: !this.state.isPopup });
    }

    memberFormSubmit(values) {
        let obj = {};
        obj.id = values.id;
        obj.name = values.name;
        obj.sections = new Array(this.props.memberSections).fill(0);
        obj.joindate = new Date().getTime();
        obj.status = "active";
        values.sections.forEach((item, ix) => {
            obj.sections[parseInt(item) - 1] = 1;
        });
        this.props.addMembersDataAction(obj);
        this.togglePopup();
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
                            <Button className="btn cnmBtn" color="success"
                                onClick={() => this.togglePopup()}
                            >Create a new member</Button>
                        </Col>
                    </Row>
                    <Col className="membersTable pt-3">
                        <MembersTable />
                    </Col>
                </Container>

                <Modal isOpen={this.state.isPopup} size="lg" toggle={this.togglePopup} className="">
                    <ModalHeader toggle={this.togglePopup}>Create New Member</ModalHeader>
                    <ModalBody>
                        <CreateMemberForm onSubmit={this.memberFormSubmit} />
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    membersdata: state.members.membersdata,
    memberSections: state.members.memberSections
});

export default connect(mapStateToProps, {
    filterMembersDataAction, addMembersDataAction
})(Home);