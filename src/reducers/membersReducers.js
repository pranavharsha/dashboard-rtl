import {
    SET_MEMBERS_DATA, FILTER_MEMBERS_DATA
} from '../actions/types';

const initialState = {
    masterMembersdata: [],
    membersdata: [],
    memberSections: 1,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_MEMBERS_DATA:
            return {
                ...state,
                membersdata: action.payload.data,
                masterMembersdata: [...action.payload.data],
                memberSections: Math.max(...action.payload.data.map((item) => item.sections.length)),
            }
        case FILTER_MEMBERS_DATA:
            let filteredData = [...state.masterMembersdata];
            let value = action.payload.value;
            if (value) {
                filteredData = filteredData.filter((item, ix) => item.id.indexOf(value) != -1 || item.name.indexOf(value) != -1);
            }
            return {
                ...state,
                membersdata: filteredData
            }
        default:
            return state;
    }
}