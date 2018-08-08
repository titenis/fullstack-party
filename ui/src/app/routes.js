import React from 'react';
import {Route, Router} from 'react-router';

import App from './modules/App'
import LoginContainer from './modules/Auth/containers/LoginContainer';
import LogoutContainer from './modules/Auth/containers/LogoutContainer';
import ListContainer from './modules/Issues/containers/ListContainer';
import IssueContainer from './modules/Issues/containers/IssueContainer';

import {requireAuth} from './modules/Auth/security'

const Routes = ({history, store}) => (
    <Router history={history}>
        <Route path='login' component={LoginContainer}/>
        <Route path='logout' component={LogoutContainer}/>
        <Route path='/' component={App} onEnter={requireAuth(store, history)}>
            <Route path='list' component={ListContainer}/>
            <Route path='issue/:issue_number' component={IssueContainer}/>
        </Route>
    </Router>
);

export default Routes;