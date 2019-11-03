import React, { Component } from 'react';
import { Col, Input } from 'reactstrap';


// Validations for the Form
export const required = value => (value ? undefined : 'Required')

export const maxLength = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined

export const minLength = min => value => value && value.length < min ? `Must be ${min} characters or more` : undefined

export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined

export const minValue = min => value => value && value < min ? `Must be at least ${min}` : undefined

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined

export const password = value =>
    value && !/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(value)
        ? 'Your password is minimum of 8 characters, contains atleast 1 character from uppercase, lowercase, number and symbol':
        undefined

export const alphaNumeric = value =>
    value && /[^a-zA-Z0-9 ]/i.test(value)
        ? 'Only alphanumeric characters'
        : undefined

export const phoneNumber = value =>
    value && !/^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/i.test(value)
        ? 'Invalid phone number, must be 10 digits'
        : undefined


// Fields used in forms

export const renderTextField = (
    { input, label, meta: { touched, error, warning }, ...custom },
) => (
        <React.Fragment>
            <Input hinttext={label} floatinglabeltext={label} errortext={touched && error} {...input} {...custom} />

            <Col className="CustomFormErrDiv pl-1 pr-1">
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </Col>
        </React.Fragment>
    );


// Reusable functions

const Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export function FormatDate(field, IsTime = false, NoYear = false) // Formating Date into the format of "15 Aug 2019"
{
    var fielddate = new Date(field);
    var Month = fielddate.getMonth();
    var Day = fielddate.getDate();
    var Year = fielddate.getFullYear();
    var Hours = fielddate.getHours();
    Hours = Hours < 10 ? "0" + Hours : Hours;
    var Mins = fielddate.getMinutes();
    Mins = Mins < 10 ? "0" + Mins : Mins;
    //var Tz = fielddate.
    if (IsTime) {
        return Months[Month] + " " + Day + " " + Year + " " + Hours + ":" + Mins;
    }
    else {
        if (NoYear) {
            return Day + " " + Months[Month];
        }
        else {
            return Day + " " + Months[Month] + " " + Year;
        }
    }
}




