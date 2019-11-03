import {
    SET_MEMBERS_DATA, FILTER_MEMBERS_DATA, ADD_MEMBERS_DATA, DELETE_MEMBERS_DATA
} from './types';

export function getMembersDataAction() {
    return function (dispatch) {
        fetch("/data/data.json").then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('Something went wrong');
            }
        }).then((data) => {
            // console.log(data);
            dispatch({
                type: SET_MEMBERS_DATA,
                payload: { data: data.members }
            });
        }).catch((data) => {
            console.log(data);
        });
    }
}

export function filterMembersDataAction(value) {
    return function (dispatch) {
        dispatch({
            type: FILTER_MEMBERS_DATA,
            payload: { value: value }
        });
    }
}

export function addMembersDataAction(obj) {
    return function (dispatch) {
        dispatch({
            type: ADD_MEMBERS_DATA,
            payload: { obj: obj }
        });
    }
}

export function deleteMembersDataAction(id) {
    return function (dispatch) {
        dispatch({
            type: DELETE_MEMBERS_DATA,
            payload: { id: id }
        });
    }
}
