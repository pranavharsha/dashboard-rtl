import {
    LOGIN_SUCCESS, LOGOUT_SUCCESS
} from '../actions/types';

const initialState = {
    islogin: false,
    userDetails: {},
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                islogin: true,
                userDetails: action.payload.userDetails
            }
        case LOGOUT_SUCCESS:
            return {
                islogin: false,
                userDetails: {}
            }
        default:
            return state;
    }
}

