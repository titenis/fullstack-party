export const ISSUE_ACTIONS = {
    REQUEST: 'ISSUE_REQUEST',
    SUCCESS: 'ISSUE_SUCCESS',
    FAILURE: 'ISSUE_FAILURE'
};

export const ISSUE_COUNT_ACTIONS = {
    REQUEST: 'ISSUE_COUNT_ISSUE_REQUEST',
    SUCCESS: 'ISSUE_COUNT_ISSUE_SUCCESS',
    FAILURE: 'ISSUE_COUNT_ISSUE_FAILURE',
    SET_OPEN: 'SET_OPEN_COUNT',
    SET_CLOSED: 'SET_CLOSED_COUNT'
};

export const setOpenCount = (count) => ({
    type: ISSUE_COUNT_ACTIONS.SET_OPEN,
    payload: count
});

export const setClosedCount = (count) => ({
    type: ISSUE_COUNT_ACTIONS.SET_CLOSED,
    payload: count
});

const initialState = {
    items: {},
    openCount: 0,
    closedCount: 0,
    error: null
};

const issues = (state = initialState, action) => {
    switch (action.type) {
        case ISSUE_ACTIONS.SUCCESS:
            return Object.assign({}, state, {
                items: action.payload.data.items,
                error: null
            });
        case ISSUE_ACTIONS.FAILURE:
            return Object.assign({}, state, {
                items: {},
                error: action.error.status + ' - ' + action.error.message
            });
        case ISSUE_COUNT_ACTIONS.SET_OPEN:
            return Object.assign({}, state, {
                openCount: action.payload,
                error: null
            });
        case ISSUE_COUNT_ACTIONS.SET_CLOSED:
            return Object.assign({}, state, {
                closedCount: action.payload,
                error: null
            });
        case ISSUE_COUNT_ACTIONS.FAILURE:
            return Object.assign({}, state, {
                openCount: initialState.openCount,
                closedCount: initialState.closedCount,
                error: action.error.status + ' - ' + action.error.message
            });
        default:
            return state
    }
};

export default issues;