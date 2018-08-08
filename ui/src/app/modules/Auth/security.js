export const requireAuth = (store, history) => (nextState, replace) => {
    if (!isLoggedIn()) {
        replace({
            pathname: '/login',
        });
    } else if (nextState.routes.length < 2) {
        replace({
            pathname: '/list',
        });
    }
};

const isLoggedIn = () => localStorage.getItem('token') && localStorage.getItem('token') !== 'undefined';