import { TOGGLE_SIDENAV } from '../constants/actionTypes';

const initialState = {
    isCollapsed: true,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SIDENAV:
            return {
                ...state,
                isCollapsed: !action.data,
            };

        default:
            return state;
    }
};