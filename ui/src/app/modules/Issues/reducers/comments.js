export const COMMENTS_ACTIONS = {
    REQUEST: 'COMMENTS_REQUEST',
    SUCCESS: 'COMMENTS_SUCCESS',
    FAILURE: 'COMMENTS_FAILURE'
};

const initialState = {
    comments: {},
    error: null
};

const comments = (state = initialState, action) => {
    switch (action.type) {
        case COMMENTS_ACTIONS.SUCCESS:
            return Object.assign({}, state, {
                comments: action.payload.data,
                error: null
            });
        case COMMENTS_ACTIONS.FAILURE:
            return Object.assign({}, state, {
                comments: {},
                error: action.error.status + ' - ' + action.error.message
            });
        default:
            return state
    }
};

export default comments;