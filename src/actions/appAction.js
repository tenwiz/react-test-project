import { TOGGLE_SIDENAV } from '../constants/actionTypes';

export const toggleSideNav = (collapsed) => async dispatch => {
    try {
        dispatch({
            type: TOGGLE_SIDENAV,
            data: collapsed
        });
    } catch (error) {
        console.log(error);
    }
};