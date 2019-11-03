import {
    SET_MEMBERS_DATA
} from '../actions/types';

const initialState = {
    membersdata: [],
    memberSections: 1,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_MEMBERS_DATA:
            return {
                membersdata: action.payload.data,
                memberSections: Math.max(...action.payload.data.map((item) => item.sections.length)),
            }
        default:
            return state;
    }
}