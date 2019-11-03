import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Col, Row, Button, Container, Table
} from 'reactstrap';
import { getMembersDataAction, deleteMembersDataAction } from '../actions/membersActions';
import { FormatDate } from '../Utils';

class MembersTable extends Component {
    constructor(props) {
        super(props);
        this.sectionsBodyRender = this.sectionsBodyRender.bind(this);
    }
    componentWillMount() {
        this.props.getMembersDataAction();
    }
    sectionsBodyRender(list, curIx) {
        let numSec = this.props.memberSections;
        let secList = new Array(numSec).fill("-");
        let retList = secList.map((item, ix) => {
            if (parseInt(list[ix]) >= 0) {
                return (
                    <td className="memSec" key={curIx + "td" + ix}>{list[ix]}</td>
                )
            } else {
                return (
                    <td className="memSec" key={curIx + "td" + ix}>{item}</td>
                )
            }
        });
        return retList;
    }
    render() {
        const sectionsHead = new Array(this.props.memberSections).fill(this.props.memberSections).map((val, ix) => {
            return (
                <th key={"th" + ix}>{ix + 1}</th>
            )
        });

        const tableBody = this.props.membersdata.map((item, ix) => {
            return (
                <tr key={item.id}>
                    <td className="memId">{item.id}</td>
                    <td className="memName">{item.name}</td>
                    {this.sectionsBodyRender(item.sections, ix)}
                    <td className="memDate">{FormatDate(parseInt(item.joindate), true)}</td>
                    <td className="memSts">{item.status}</td>
                    <td>
                        <Button outline className="deleteMmeberBtn"
                            onClick={() => this.props.deleteMembersDataAction(item.id)}>
                            Delete
                        </Button>
                    </td>
                </tr>
            )
        });

        return (
            <React.Fragment>
                <Table className="mt-3 membersTable text-center">
                    <thead>
                        <tr>
                            <th rowSpan="2">Id</th>
                            <th rowSpan="2">Name</th>
                            <th colSpan={this.props.memberSections}>Sections</th>
                            <th rowSpan="2">Join Date</th>
                            <th rowSpan="2">Status</th>
                            <th rowSpan="2"></th>
                        </tr>
                        <tr>
                            {sectionsHead}
                        </tr>
                    </thead>
                    <tbody>
                        {tableBody}
                    </tbody>
                </Table>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    membersdata: state.members.membersdata,
    memberSections: state.members.memberSections
});

export default connect(mapStateToProps, {
    getMembersDataAction, deleteMembersDataAction
})(MembersTable);