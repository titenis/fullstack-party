import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';

import auth from '../modules/Auth/reducers/auth';
import issues from '../modules/Issues/reducers/issues';
import singleIssue from '../modules/Issues/reducers/singleIssue';
import comments from '../modules/Issues/reducers/comments';
import pagination from "../modules/Pagination/reducers/pagination"

const rootReducer = combineReducers({
    routing,
    auth,
    issues,
    singleIssue,
    comments,
    pagination
});

export default rootReducer;