export const ISSUE_ACTIONS = {
    REQUEST: 'ISSUE_REQUEST',
    SUCCESS: 'ISSUE_SUCCESS',
    FAILURE: 'ISSUE_FAILURE'
};

const initialState = {
    items: {},
    error: null
};

const issues = (state = initialState, action) => {
    switch (action.type) {
        case ISSUE_ACTIONS.SUCCESS:
            return Object.assign({}, state, {
                items: action.payload.data,
                error: null
            });
        case ISSUE_ACTIONS.FAILURE:
            return Object.assign({}, state, {
                items: {},
                error: action.error.status + ' - ' + action.error.message
            });
        default:
            return state
    }
};

export default issues;