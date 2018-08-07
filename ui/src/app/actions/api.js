import axios from 'axios';

export const API_ACTIONS = {
    REQUEST: 'API_REQUEST',
    SUCCESS: 'API_SUCCESS',
    FAILURE: 'API_FAILURE'
};

export const GITHUB_ACTIONS = {
    REQUEST: 'GITHUB_REQUEST',
    SUCCESS: 'GITHUB_SUCCESS',
    FAILURE: 'GITHUB_FAILURE'
};

const apiRequest = (actionType) => ({
    type: actionType.REQUEST
});

const apiSuccess = (actionType, response) => ({
    type: actionType.SUCCESS,
    payload: response
});

export const apiFailure = (actionType, error) => ({
    type: actionType.FAILURE,
    payload: error
});

export const call = (action, url, data = null, method = 'GET',
                     successCallback = () => {
                     }, errorCallback = () => {
    },
                     customProps = {}) =>
    (dispatch) => {
        dispatch(apiRequest(action));
        axios({
            ...{
                url: `${url}`,
                data: data,
                method: method,
                headers: getHeaders()
            }, ...customProps
        }).then((response) => {
            dispatch(apiSuccess(action, response));

            successCallback(response.data);
        }).catch((error) => {
            console.log('ERROR', error);
            dispatch(apiFailure(action, error));
            errorCallback(error.response);
        });
    };

const getHeaders = () => ({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
});
