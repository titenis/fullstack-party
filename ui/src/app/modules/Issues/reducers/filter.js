export const FILTER_ACTIONS = {
    SET_REPO: 'FILTER_SET_REPO',
    SET_TYPE: 'FILTER_SET_TYPE',
    SET_STATE: 'FILTER_SET_STATE'
};

export const setRepo = (repo) => ({
    type: FILTER_ACTIONS.SET_REPO,
    payload: repo
});

export const setType = (type) => ({
    type: FILTER_ACTIONS.SET_TYPE,
    payload: type
});

export const setState = (state) => ({
    type: FILTER_ACTIONS.SET_STATE,
    payload: state
});

const initialState = {
    repo: 'symfony/symfony',
    type: 'issue',
    state: 'open'
};

const filter = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_ACTIONS.SET_REPO:
            return Object.assign({}, state, {
                repo: action.payload
            });
        case FILTER_ACTIONS.SET_TYPE:
            return Object.assign({}, state, {
                type: action.payload
            });
        case FILTER_ACTIONS.SET_STATE:
            return Object.assign({}, state, {
                state: action.payload
            });
        default:
            return state
    }
};

export default filter;