import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function (ComposedComponent) {
    class ProtectedAuth extends Component {
        componentWillMount() {
            if (!this.props.islogin) {
                this.props.history.push('/login');
            }
        }
        componentWillUpdate(nextProps) {
            if (!nextProps.islogin) {
                nextProps.history.push('/login');
            }
        }
        PropTypes = {
            router: PropTypes.object,
        }
        render() {
            return <ComposedComponent {...this.props} />;
        }
    }
    const mapStateToProps = state => ({
        islogin: state.login.islogin,
        userDetails: state.login.userDetails,
    });
    return connect(mapStateToProps)(ProtectedAuth);
}