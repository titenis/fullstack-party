export const LOGOUT_ACTION = "LOGOUT_ACTION";

export const logout = () => {
    localStorage.removeItem('token');
    return {
        type: LOGOUT_ACTION
    }
};
