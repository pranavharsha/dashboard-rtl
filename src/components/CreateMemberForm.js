import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Field, reduxForm, reset } from 'redux-form';
import { required, renderTextField } from '../Utils';

class CreateMemberForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { handleSubmit } = this.props;

        const sectionsOptions = new Array(this.props.memberSections).fill(0).map((item, ix) => {
            return (
                <option value={ix + 1}>{ix + 1}</option>
            )
        });

        const renderSectionsField = (
            { input, label, meta: { touched, error, warning }, ...custom }
        ) => (
                <React.Fragment>
                    <Input type="select" multiple hinttext={label} floatinglabeltext={label} errortext={touched && error} {...input} {...custom}>
                        {sectionsOptions}
                    </Input>

                    <Col className="CustomFormErrDiv pl-1 pr-1">
                        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
                    </Col>
                </React.Fragment>
            );
            
        return (
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label className="customFormLabel" for="id">ID</Label>
                    <Field name="id" component={renderTextField} type="text" placeholder="Id"
                        validate={[required]} />
                </FormGroup>
                <FormGroup>
                    <Label className="customFormLabel" for="name">NAME</Label>
                    <Field name="name" component={renderTextField} type="text" placeholder="Name"
                        validate={[required]} />
                </FormGroup>
                <FormGroup>
                    <Label className="customFormLabel" for="sections">SECTIONS</Label>
                    <Field name="sections" component={renderSectionsField} placeholder="sections"
                        validate={[required]} />
                </FormGroup>
                <Col className="text-center mt-3">
                    <Button type="submit" className="btn">Submit</Button>
                </Col>
            </Form>
        )
    }
}

const afterSubmit = (result, dispatch) => dispatch(reset('createmember'));

CreateMemberForm = reduxForm({
    form: 'createmember',
    onSubmitSuccess: afterSubmit,
})(CreateMemberForm)

const mapStateToProps = state => ({
    memberSections: state.members.memberSections
});

CreateMemberForm = connect(mapStateToProps, {})(CreateMemberForm)

export default CreateMemberForm;


