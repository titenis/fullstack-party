import {API_ACTIONS} from '../../../actions/api';
import {LOGOUT_ACTION} from "../actions/Actions";

const initialState = {
    token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
    error: null
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case API_ACTIONS.SUCCESS:
            localStorage.setItem('token', action.payload.data.access_token);
            return Object.assign({}, state, {
                token: action.payload.data.access_token,
                error: null
            });
        case API_ACTIONS.FAILURE:
            return Object.assign({}, state, {
                token: null,
                error: action.payload.response.status + ' - ' + action.payload.response.data.message
            });

        case LOGOUT_ACTION:
            console.log(action.type);
            return Object.assign({}, state, {
                token: null,
                error: null
            });
        default:
            return state
    }
};

export default auth;