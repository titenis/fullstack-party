export const PAGINATION_ACTIONS = {
    SET_COUNT: 'PAGINATION_SET_COUNT',
    SET_PER_PAGE: 'PAGINATION_SET_PER_PAGE',
    NAV_TO_PAGE: 'PAGINATION_NAV_TO_PAGE',
    NAV_NEXT: 'PAGINATION_NAV_NEXT',
    NAV_PREV: 'PAGINATION_NAV_PREV'
};

export const setCount = (count) => ({
    type: PAGINATION_ACTIONS.SET_COUNT,
    payload: count
});

export const navToPage = (page) => ({
    type: PAGINATION_ACTIONS.NAV_TO_PAGE,
    payload: page
});

export const navNext = () => ({
    type: PAGINATION_ACTIONS.NAV_NEXT,
});

export const navPrev = (page) => ({
    type: PAGINATION_ACTIONS.NAV_PREV,
});

const initialState = {
    currentPage: 1,
    perPage: 10,
    count: 0
};

const pagination = (state = initialState, action) => {
    switch (action.type) {
        case PAGINATION_ACTIONS.SET_COUNT:
            return Object.assign({}, state, {
                count: parseInt(action.payload, 10)
            });
        case PAGINATION_ACTIONS.SET_PER_PAGE:
            return Object.assign({}, state, {
                perPage: action.payload
            });
        case PAGINATION_ACTIONS.NAV_TO_PAGE:
            return Object.assign({}, state, {
                currentPage: action.payload
            });
        case PAGINATION_ACTIONS.NAV_NEXT:
            return Object.assign({}, state, {
                currentPage: state.currentPage + 1
            });
        case PAGINATION_ACTIONS.NAV_PREV:
            return Object.assign({}, state, {
                currentPage: state.currentPage - 1
            });
        default:
            return state
    }
};

export default pagination;