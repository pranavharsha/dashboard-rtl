import {
    SET_MEMBERS_DATA
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
