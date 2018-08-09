import axios from 'axios';
import {logout} from "../modules/Auth/actions/Actions";
import parse from "parse-link-header";
import {setCount} from '../modules/Pagination/reducers/pagination';

export const API_ACTIONS = {
    REQUEST: 'API_REQUEST',
    SUCCESS: 'API_SUCCESS',
    FAILURE: 'API_FAILURE'
};

const apiRequest = (actionType) => ({
    type: actionType.REQUEST
});

const apiSuccess = (actionType, response) => ({
    type: actionType.SUCCESS,
    payload: response
});

const apiFailure = (actionType, error) => ({
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

            const paginationData = parse(response.headers.link);
            if (paginationData && paginationData.last) {
                dispatch(setCount(paginationData.last.page));
            }

        }).catch((error) => {
            console.log('ERROR', error);
            if (error.response.status === 401) {
                dispatch(logout());
                window.location.href = __ROOTURL__;
            }

            dispatch(apiFailure(action, error));
            errorCallback(error.response);
        });
    };

const getHeaders = () => ({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
});
