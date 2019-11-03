import {
    LOGIN_SUCCESS, LOGOUT_SUCCESS
} from '../actions/types';

export function loginAction(loginDetails) {
    return function (dispatch) {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: { userDetails: { email: loginDetails.email, name: loginDetails.email.split("@")[0] } }
        });
    }
}

export function logoutAction() {
    return function (dispatch) {
        dispatch({
            type: LOGOUT_SUCCESS,
            payload: {}
        });
    }
}









