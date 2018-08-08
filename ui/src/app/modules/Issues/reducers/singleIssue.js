export const SINGLE_ISSUE_ACTIONS = {
    REQUEST: 'SINGLE_ISSUE_REQUEST',
    SUCCESS: 'SINGLE_ISSUE_SUCCESS',
    FAILURE: 'SINGLE_ISSUE_FAILURE'
};

const initialState = {
    singleItem: {},
    error: null
};

const singleIssue = (state = initialState, action) => {
    switch (action.type) {
        case SINGLE_ISSUE_ACTIONS.SUCCESS:
            return Object.assign({}, state, {
                singleItem: action.payload.data,
                error: null
            });
        case SINGLE_ISSUE_ACTIONS.FAILURE:
            return Object.assign({}, state, {
                singleItem: {},
                error: action.error.status + ' - ' + action.error.message
            });
        default:
            return state
    }
};

export default singleIssue;