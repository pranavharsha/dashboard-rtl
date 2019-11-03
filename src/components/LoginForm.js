import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { required, email, renderTextField, password } from '../Utils';

class LoginForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label className="customFormLabel" for="email">Email</Label>
                    <Field name="email" component={renderTextField} type="text" placeholder="Email"
                        validate={[required, email]} />
                </FormGroup>
                <FormGroup>
                    <Label className="customFormLabel" for="password">Password</Label>
                    <Field name="password" component={renderTextField} type="password" placeholder="Password"
                        validate={[required, password]} />
                </FormGroup>
                <Col className="text-center mt-3">
                    <Button type="submit" className="btn">Log In</Button>
                </Col>
            </Form>
        )
    }
}

export default reduxForm({
    form: 'login',
})(LoginForm);


